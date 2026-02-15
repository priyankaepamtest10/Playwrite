import { test, expect } from '@playwright/test';

test('EPAM.com Client Work Page E2E', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu.
  await page.getByRole('link', { name: /services/i }).click();

  // Step 3: Click the "Explore Our Client Work" link.
  await page.getByRole('link', { name: /explore our client work/i }).click();

  // Step 4: Verify that the "Client Work" text is visible on the page.
  await expect(page.locator('text=Client Work')).toBeVisible();
});
