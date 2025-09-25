import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Navigate to the Web Page
  await page.goto('https://www.eight25media.com/:');
    // Assert the title
  await expect(page.getByRole('link', { name: 'EIGHT25MEDIA' })).toBeVisible();
    // Click the work menu
  await page.getByRole('link', { name: 'Work Work Work' }).click();
    // Verify that our work
  await expect(page.locator('#h-not-all-work-is-created-equal')).toContainText('Our Work.');
  
});