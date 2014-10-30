"use strict";

var generators = require('yeoman-generator');
var actions = require('../lib/actions');

module.exports = generators.Base.extend({
  "initializing": actions.greet,
  "prompting": {
    "askForDestinationDir": actions.askForDestinationDir,
    "askForParameters": actions.askForParameters
  },
  "writing": actions.scaffold,
  "end": actions.end
});
