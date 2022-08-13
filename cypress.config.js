const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'enq4cc',
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "https://demo.nopcommerce.com/"
  },
});
