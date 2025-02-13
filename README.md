# TypeScript Playwright for Web Automation

Welcome to the TypeScript Playwright project!

This repository was created by [Marco A. Cruz](http://www.linkedin.com/in/marco-a-cruz) and contains a framework designed to automate web browsers using Playwright, with TypeScript.

Visit automateNow's [TypeScript Playwright playlist](https://youtube.com/playlist?list=PLjfhFHeUQDOi4HhD5dfXYasFn6mXbqbux&si=OMzjXF4ZI3_bsM29) on YouTube to follow along.

# Overview
This project aims to teach the fundamentals of using Playwright for software test automation.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn (package manager)

### Installation

1. Clone the Repository
```
git clone https://github.com/automatenow/typescript-playwright-web-automation.git
cd typescript-playwright-web-automation
```

2. Install Dependencies

```
npm install
# Or if you prefer yarn
yarn install
```

### Configuration
All settings for Playwright are in ```playwright.config.ts```. Here you can define browsers, devices, and test configurations.

### Running Tests
- Run All Tests

```
npm test
# Or with yarn
yarn test
```

- Run Tests for Specific Browser

```
npx playwright test --browser=chromium
```

- Run Tests in UI Mode

```
npx playwright test --ui
```

### Structure
- **/tests**: Contains all your test files.
- **playwright.config.ts**: Configuration for Playwright tests.
- **package.json**: NPM scripts and dependencies.

### Writing Tests
- Use ```.spec.ts``` for your test files. Here's a simple example:

```
// example.spec.ts
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://automateNow.io');
  await expect(page).toHaveTitle('automateNow');
});
```

### License
This project is licensed under the MIT License - see the LICENSE file for details.

## About automateNow
[automateNow](https://automatenow.io/) is a leading learning platform catering to the needs of software testers. We are dedicated to empowering testers with the necessary skills and resources to excel in test automation and beyond.
