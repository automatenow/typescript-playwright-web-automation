import { test, expect } from '@playwright/test';

/**
 * This test uses the getByRole locator to enter text into an input field.
 * Use getByRole to locate an element by its explicit and implicit accessibility attributes.
 */
test ('using getByRole locator', async ({ page }) => {
    // Visit the Form Fields page
    await page.goto('https://practice-automation.com/form-fields/');

    // Fill the Name field using getByRole locator
    const nameField = page.getByRole('textbox', { name: 'Name' });
    await nameField.fill('Marco');

    // Verify the input value 
    await expect(nameField).toHaveValue('Marco');
});

/**
 * This test uses the getByText locator to to locate an element by it's text content.
 * Use getByText to locate an element by it's text content.
 */
test ('using getByText locator', async ({ page }) => {
    // Visit the Form Fields page
    await page.goto('https://practice-automation.com/form-fields/');

    // Verify that the text "Playwright" is displayed on the page
    const playwrightText = page.getByText('Playwright');
    await expect(playwrightText).toBeVisible();
});

/**
 * This test uses the getByLabel locator to enter text into a password field.
 * Use getByLabel to locateto locate a form control by associated label's text.
 */
test ('using getByLabel locator', async ({ page }) => {
    // Visit the Form Fields page
    await page.goto('https://practice-automation.com/form-fields/');

    // Fill the Password field using getByLabel locator
    const nameField = page.getByLabel('Password');
    await nameField.fill('automateNow!');
});

/**
 * This test uses the getByPlaceholder locator to enter text into a text box.
 * Use getByPlaceholder to locate a form control by its placeholder text.
 */
test ('using getByPlaceholder locator', async ({ page }) => {
    // Visit the Form Fields page
    await page.goto('https://practice-automation.com/form-fields/');

    // Enter some text in the Message textbox
    const messageField = page.getByPlaceholder('Enter message here');
    await messageField.fill('This is a test.');

    // Assert that the Message field has the expected value
    await expect(messageField).toHaveValue('This is a test.');
});

/**
 * This test uses the getByAltText locator to locate an image by its alt text.
 * Use getByAltText to locateto locate an element, usually image, by its text alternative.
 */
test ('using getByAltText locator', async ({ page }) => {
    // Visit the Form Fields page
    await page.goto('https://practice-automation.com/form-fields/');

    // Verify that the automateNow Logo is displayed on the page
    const logo = page.getByAltText('automateNow Logo');
    await expect(logo).toBeVisible();
});

/**
 * This test uses the getByTitle locator to enter an email address into an input field.
 * Use getByTitle to locate an element by its title attribute.
 */
test ('using getByTitle locator', async ({ page }) => {
    // Visit the Form Fields page
    await page.goto('https://practice-automation.com/form-fields/');

    // Fill in the Email field
    const emailField = page.getByTitle('No fake emails!');
    await emailField.fill('qa@test.com');

    // Assert the Email field has the expected value
    await expect(emailField).toHaveValue('qa@test.com');
});

/**
 * This test uses the getByTestId locator to select an option from a dropdown.
 * Use getByTestId to locate an element based on its data-testid attribute (other attributes can be configured).
 */
test ('using getByTestId locator', async ({ page }) => {
    // Visit the Form Fields page
    await page.goto('https://practice-automation.com/form-fields/');

    // Select 'Yes' in the 'Do you like automation?' dropdown
    const dropdown = page.getByTestId('automation');
    await dropdown.selectOption('yes');

    // Assert the dropdown has the expected value
    await expect(dropdown).toHaveValue('yes');
});