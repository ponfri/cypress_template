import { defineConfig } from 'cypress';
const { allureCypress } = require("allure-cypress/reporter");

export default defineConfig({
  projectId: '86rthf',
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  experimentalMemoryManagement: true,
  experimentalWebKitSupport: true,
  env: {
    username: "",
    password: "",
    apiUrl: "https://conduit-api.bondaracademy.com",
    allure: true
  },
  retries: {
    runMode: 1,
    openMode: 1
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    baseUrl: 'https://conduit.bondaracademy.com',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    downloadsFolder: 'cypress/downloads',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      allureCypress(on, {
        resultsDir: "./allure-results",
        links: [
          { type: "issue", urlTemplate: "https://issues.example.com/%s" },
          { type: "tms", urlTemplate: "https://tms.example.com/%s" },
        ],
      });
      on('before:browser:launch', (browser, launchOptions) => {
        if (['chrome', 'edge'].includes(browser.name)) {
          if (browser.isHeadless) {
            launchOptions.args.push('--no-sandbox');
            launchOptions.args.push('--disable-gl-drawing-for-tests');
            launchOptions.args.push('--disable-gpu');
          }
          launchOptions.args.push('--js-flags=--max-old-space-size=3500');
        }
        return launchOptions;
      });

      return config;
    },
  },
});