import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://practicetestautomation.com/practice-test-login/',
    // Mantém o estado entre os testes, evitando recarregamentos.
    testIsolation: false
  },
});
