const { afterAll, beforeAll } = require('@jest/globals');
const { spawn } = require('child_process');
const path = require('path');
const supertest = require('supertest');

let serverProcess;

beforeAll((done) => {
  const serverPath = path.resolve(__dirname, '../dist/index.js');
  serverProcess = spawn('node', [serverPath], {
    stdio: 'inherit',
  });

  const checkServer = () => {
    supertest('http://localhost:8080')
      .get('/config')
      .then(() => done())
      .catch(() => setTimeout(checkServer, 2000));
  };

  checkServer();
});

afterAll(() => {
  serverProcess?.kill();
});
