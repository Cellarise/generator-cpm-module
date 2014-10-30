'use strict';
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');
var mkdirp = require("mkdirp");
var helpers = require('../lib/helpers');

var actions = exports;

// All actions defined in this file should be called with `this` pointing
// to a generator instance

actions.greet = function greet() {
  this.log(yosay("Let's create a Cellarise module!"));
};

/**
 * Ask the user whether he wants to scaffold the app in the current directory
 * or whether a new subdirectory should be created instead.
 */
actions.askForDestinationDir = function askForDestinationDir() {
  var done, dir, root;
  if (this._externalProject){
    return;
  }
  done = this.async();
  //save current working directory
  this.prompt([{
      "name": 'dir',
      "message": 'Enter a directory name where to create the project:',
      "default": '.',
      "validate": helpers.validateProjectName
    }], function promptCallback(answers) {
    dir = answers.dir;
    if (!dir || dir === '.') {
      return done();
    }
    this.dir = dir;
    root = path.join(this.destinationRoot(), dir);
    if (!fs.existsSync(root)) {
      this.log.create(dir + '/');
      fs.mkdirSync(root);
    }
    this.destinationRoot(root);
    this.log.info('change the working directory to %s', dir);
    this.log();
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
    }];

  this.prompt(prompts, function promptCallback(parameters) {
    this.parameters = parameters;
    done();
  }.bind(this));
};

actions.scaffold = function scaffold() {
  var pkg;
  var pkgPath = path.join(this.destinationRoot(), 'package.json');
  this.directory('./standard', '.');
  mkdirp.sync(this.destinationRoot() + "/Test/functional");
  mkdirp.sync(this.destinationRoot() + "/Test/integration");
  mkdirp.sync(this.destinationRoot() + "/Test/unit");
  if (!fs.existsSync(pkgPath)){
    //if no existing package.json then new mode
    this.directory('./examples', '.');
    if (this.parameters.private) {
      //this.directory('./private', '.');
      this.src.copy('./private/LICENSE', 'LICENSE');
      pkg = this.src.readJSON('./private/package.json');
    } else {
      //this.directory('./public', '.');
      this.src.copy('./public/LICENSE', 'LICENSE');
      pkg = this.src.readJSON('./public/package.json');
    }
    //add properties to package.json
    pkg.name = this.parameters.projectName;
    pkg.description = this.parameters.projectDesc;
    pkg.config.projectCode = this.parameters.projectCode;
    this.dest.write(pkgPath, JSON.stringify(pkg, null, 2));
  }
};
