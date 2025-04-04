import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.reload();
  await page.goto('http://localhost:3000/products');

  const firstProductAddButton = await page.locator('[data-test="add-to-cart"]').first();
  await firstProductAddButton.click();
});

test('Adding an item to your cart populates it in the navbar badge', async ({ page }) => {
  const cartBadge = await page.locator('[data-test="nav-cart-badge"]').first();
  expect(cartBadge).toHaveText('1');
});

test('Removing an item to your cart removes it from the navbar badge', async ({ page }) => {
  const firstProductRemoveButton = await page.locator('[data-test="remove-from-cart"]').first();
  await firstProductRemoveButton.click();

  const cartBadgeVisible = await page.locator('[data-test="nav-cart-badge"]').isVisible();
  expect(cartBadgeVisible).toBeFalsy();
});

test('Filling out payment element correctly redirects you to submitted page', async ({ page }) => {
  const cartButton = await page.locator('[data-test="cart-button"]');
  await cartButton.click();

  const iframe = await page.frameLocator(
    'iframe[title*="payment input"][src*="elements-inner-payment"]'
  );

  await iframe.locator('input[name="number"]').fill('4242424242424242');
  await iframe.locator('input[name="expiry"]').fill('12 / 30');
  await iframe.locator('input[name="cvc"]').fill('123');
  await iframe.locator('input[name="postalCode"]').fill('60614');

  const submitButton = await page.locator('[data-test="payment-button"]');
  await submitButton.click();

  const thankYouText = await page.locator('[data-test="thank-you"]');
  expect(thankYouText).not.toBeNull();
});
