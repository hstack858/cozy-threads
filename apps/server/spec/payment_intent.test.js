const dotenv = require('dotenv');
const Stripe = require('stripe');
const supertest = require('supertest');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const apiUrl = 'http://localhost:8080';
const stripeClient = new Stripe(process.env.SECRET_KEY ?? '', {
  apiVersion: '2022-11-15',
});

describe('Payment Element Integration Tests', () => {
  test('served config as expected', async () => {
    const response = await supertest(apiUrl).get('/key');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('publishableKey');
    expect(response.body.publishableKey).toMatch(/^pk_test/);
  });

  test('creates a payment intent', async () => {
    const response = await supertest(apiUrl).post('/create-payment-intent').send({ amount: 1000 });

    expect(response.status).toBe(201);
    const clientSecret = response.body.clientSecret;
    const pi_id = clientSecret.split('_secret')[0];

    const paymentIntent = await stripeClient.paymentIntents.retrieve(pi_id);
    expect(paymentIntent.payment_method_types.length).toBeGreaterThan(0);
  });
});
