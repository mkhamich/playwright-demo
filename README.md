# Playwright Demo

This is a minimal demo showing how I work with Playwright for end-to-end testing.

### Example Test

```ts
import { test, expect } from '@playwright/test';

test('homepage has Playwright in title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
