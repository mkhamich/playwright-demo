import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',
  retries: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});
