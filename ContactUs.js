import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.eight25media.com/:');

// Navigate to the contact us page
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();

// Fill test user //
  await page.getByRole('textbox', { name: 'Name *' }).fill('Test User');
  await page.getByRole('textbox', { name: 'Email Address *' }).click();
// Fill email address
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('testuser@example.com');
  await page.locator('textarea[name="your-message"]').click();
// Fill text message
  await page.locator('textarea[name="your-message"]').fill('This is a test message');

// Assert the text that entered //
  await expect(page.getByRole('textbox', { name: 'Name *' })).toHaveValue('Test User');
  await expect(page.getByLabel('Contact form')).toContainText('Name Email Address Phone CompanyPlease fill the mandatory fields. Message.... Submit');
  await expect(page.locator('textarea[name="your-message"]')).toHaveValue('This is a test message');
});