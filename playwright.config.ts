import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './spec',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev:all',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
