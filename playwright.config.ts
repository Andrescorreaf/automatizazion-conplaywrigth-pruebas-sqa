import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /*Local etries proces 2  */
  retries: 0, 
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  // reporter: [['html', { open: 'always' }]], //always, never and on-failure (default).
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // reporter: [['html', { outputFolder: 'my-report' }]], // report is written into the playwright-report folder in the current working directory. override it using the PLAYWRIGHT_HTML_REPORT

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // headless: false,
    // ignoreHTTPSErrors: true,
    // viewport: { width: 1280, height: 720 },
    // video: 'on-first-retry',
    

  },
  timeout: 30000, //https://playwright.dev/docs/test-timeouts
  expect: {
  /**
   * Maximum time expect() should wait for the condition to be met.
   * For example in `await expect(locator).toHaveText();`
   */
   timeout: 10000,
  },

  /* Configure projects for major browsers */
  projects: [

    // {
    //   name: 'all-browsers-and-tests',
    //   use: {
    //     baseURL:'https://playwrigth.dev', 
    //     ...devices['Desktop Chrome'] 
    //   },
    // },

    // {
    //   name: 'all-browsers-and-tests',
    //   use: {
    //     baseURL:'https://playwrigth.dev', 
    //     ...devices['Desktop Firefox'] 
    //   },
    // },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
