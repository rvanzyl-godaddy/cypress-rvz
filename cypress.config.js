const { defineConfig } = require("cypress");

module.exports = defineConfig ({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here 
  },
  screenshotsFolder:'test-results/screenshots',
  videosFolder:'test-results/videos',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter.json'
}
}
});
