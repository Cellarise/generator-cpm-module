"use strict";

var generators = require('yeoman-generator');
var actions = require('../lib/actions');

/**
 * {description}
 * @module cpm-module
 * @example
 {>example-index/}
 */

module.exports = generators.Base.extend({
  "initializing": actions.greet,
  "prompting": {
    "askForDestinationDir": actions.askForDestinationDir,
    "askForParameters": actions.askForParameters
  },
  "writing": actions.scaffold
});
