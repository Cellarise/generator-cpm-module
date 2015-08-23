'use strict';
var yosay = require('yosay');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var helpers = require('../lib/helpers');
var _ = require('underscore');

var actions = exports;

// All actions defined in this file should be called with `this` pointing
// to a generator instance

actions.greet = function greet() {
  if (!this.options["skip-welcome-message"]) {
    this.log(yosay("Let's create a Cellarise module!"));
  }
};

/**
 * Ask the user whether he wants to scaffold the app in the current directory
 * or whether a new subdirectory should be created instead.
 */
actions.askForDestinationDir = function askForDestinationDir() {
  var done = this.async();

  //save current working directory
  this.prompt([{
    "name": 'dir',
    "message": 'Where should the project be installed (leave blank for current directory)?',
    "default": '',
    "validate": helpers.validateProjectName
  }], function promptCallback(answers) {
    var dir = answers.dir,
      appPath = path.join(this.destinationRoot(), dir);
    if (dir && dir !== '' && !fs.existsSync(appPath)) {
      this.log.create(dir + '/');
      mkdirp.sync(appPath);
      this.destinationRoot(appPath);
      this.log('Changed the working directory to %s', dir);
    }
    this.dir = dir;
    done();
  }.bind(this));
};

actions.askForParameters = function askForParameters() {
  var done = this.async(), name, prompts;

  // https://github.com/strongloop/generator-loopback/issues/38
  // yeoman-generator normalize the appname with ' '
  this.appname =
    path.basename(process.cwd()).replace(/[\/@\s\+%:\.]+?/g, '-');

  name = this.dir;

  prompts = [{
    "name": 'projectCode',
    "message": "What's the project code?",
    "validate": helpers.validateCode
  },
    {
      "name": 'projectName',
      "message": "What's the name of your project?",
      "default": name,
      "validate": helpers.validateProjectName
    },
    {
      "name": 'projectDesc',
      "message": "Provide a project description:",
      "default": name
    },
    {
      "name": 'private',
      "message": "Is this a private module?",
      "type": "confirm",
      "default": false
    },
    {
      "name": "organisationName",
      "message": "What's the name of your organisation?",
      "default": "Cellarise",
      "validate": helpers.validateProjectName
    }];

  this.prompt(prompts, function promptCallback(parameters) {
    this.parameters = parameters;
    done();
  }.bind(this));
};

actions.scaffold = function scaffold() {
  var pkgPath = path.join(this.destinationRoot(), 'package.json');
  if (!fs.existsSync(pkgPath)) {
    //if no existing package.json then scaffold module
    this.directory('./standard', '.');
    mkdirp.sync(this.destinationRoot() + "/Test/functional");
    mkdirp.sync(this.destinationRoot() + "/Test/integration");
    mkdirp.sync(this.destinationRoot() + "/Test/unit");
    this.directory('./examples', '.');
    if (this.parameters.private) {
      this.fs.copy(path.join(__dirname, "../app/templates/private/LICENSE"), 'LICENSE');
    } else {
      this.fs.copy(path.join(__dirname, "../app/templates/public/LICENSE"), 'LICENSE');
    }
  }
};

actions.writePackage = function writePackage() {
  var pkg;
  var pkgPath = path.join(this.destinationRoot(), 'package.json');
  if (this.parameters.private) {
    pkg = this.fs.readJSON(path.join(__dirname, "../app/templates/private/package.json"));
  } else {
    pkg = this.fs.readJSON(path.join(__dirname, "../app/templates/public/package.json"));
  }
  //add properties to package.json
  pkg.name = this.parameters.projectName;
  pkg.description = this.parameters.projectDesc;
  pkg.repository = {
    "type": "git",
    "url": "https://github.com/" + this.parameters.organisationName + "/" + this.parameters.projectName + ".git"
  };
  pkg.config.projectCode = this.parameters.projectCode;
  pkg = _.extend(pkg, this.options.packageJSON);
  this.fs.write(pkgPath, JSON.stringify(pkg, null, 2));
};
