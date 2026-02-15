import { test, expect } from '@playwright/test';

// Test scenario for epam.com "Client Work" interaction

test('Navigate to Client Work section via header and verify text', async ({ page }) => {
  // 1. Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // 2. Select "Services" from the header menu
  await page.getByRole('menuitem', { name: 'Services' }).click();

  // 3. Click the "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // 4. Verify that the "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});
