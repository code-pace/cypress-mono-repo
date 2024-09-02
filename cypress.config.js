const path = require("path");
const fs = require('fs');
const { defineConfig } = require("cypress");
const projectNamePath = path.join(__dirname, "cypress\\fixtures\\project.name.json");
const projectName = fs.readFileSync(projectNamePath, 'utf-8');
const name = JSON.parse(projectName).projectname;
const projectConfigPath = path.join(__dirname, `cypress\\${name}\\cypress.config.js`);
const projectConfig = require(projectConfigPath);
const _config = {...projectConfig.e2e}
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
function setupNodeEvents(on, config) {
  // implement node event listeners here
  on('file:preprocessor', createBundler())
}
/** Uncomment the line below, to use global setupNodeEvents method */
_config.setupNodeEvents = setupNodeEvents

module.exports = defineConfig({
  e2e: _config,
  viewportHeight: 700,
  viewportWidth: 1500,
});
