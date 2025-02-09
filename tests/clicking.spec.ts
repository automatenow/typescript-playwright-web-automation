import { test, expect } from '@playwright/test';

/**
 * This test right-clicks on the webpage to display the context menu.
 */
test ('mouse right-click', async ({ page }) => {
    // Visit the Form Fields page
    await page.goto('https://practice-automation.com/');

    // Right-click on the webpage
    const webpage = page.locator('html');
    await webpage.click({button: 'right'});
    await page.waitForTimeout(3000);
});