const config = {
	testDir: './tests',
	testMatch: '**/*.ts',
	// testMatch: '/Users/sujaysawant/Documents/Temp/typescript-playwright-browserstack/tests/sample_test.ts',
  
	/* Maximum time one test can run for. */
	timeout: 90 * 1000,
	expect: {
	  /**
	   * Maximum time expect() should wait for the condition to be met.
	   * For example in `await expect(locator).toHaveText();`
	   */
	  timeout: 5000,
	},
	/* tests in parallel */
	workers: 1,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'line',
	/* Configure projects for major browsers */
	projects: [
	  {
		name: 'chrome',
		use: {
		  browserName: 'chromium',
		  channel: 'chrome',
		},
	  },
	],
  };

  module.exports = config;