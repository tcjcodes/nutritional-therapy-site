const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  projectId: 'aa723s',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
