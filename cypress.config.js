const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pokedexpokemon.netlify.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.variable= process.env.NODE_ENV ?? 'NO HAY VARIABLE';
      return config;
    },
    //retries: 2,
  },
});
