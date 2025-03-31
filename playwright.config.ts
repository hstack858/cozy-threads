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
    command: 'npm run start --workspace=apps/client',
    port: 3000,
    timeout: 60 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
