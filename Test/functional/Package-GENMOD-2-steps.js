"use strict";
/* Feature: Package: Add default generator for modules */
module.exports = (function testSuite() {
  var English = require("yadda").localisation.English;
  //var assert = require('yeoman-generator').assert;
  var path = require("path");
  //var mkdirp = require("mkdirp");
  var helpers = require("yeoman-generator").test;
  var SANDBOX = path.resolve(__dirname, '../../Temp');
  var runCwd;

  return English.library()
  /*Scenario: Generate a default module */
    .define("Given a new folder",
      function test(done) {
        runCwd = process.cwd(); //remember cwd
        helpers.testDirectory(SANDBOX, done);
        //set clean up after scenario complete
        this.world.after = function afterScenario(afterDone) {
          var exec = require("child_process").exec;
          exec("rm -r " + SANDBOX, {},
            function execCommandCallback() {
              //assert(!error); //this returns an error as it can't delete the Temp directory.
              //However, all files and folders contained within it are deleted.
              process.chdir(runCwd); //reset cwd
              afterDone();
            });
        };
      })
    .define("When calling the generator",
      function test(done) {
        helpers.run(path.join(__dirname, '../../app'))
          .inDir(SANDBOX)
          .withPrompts({
            "projectCode": 'MODTEST',
            "projectName": 'test-app',
            "projectDesc": 'My new test app'
          })
          .on('end', done);
      })
    .define("When calling the generator skipping the greeting",
    function test(done) {
      helpers.run(path.join(__dirname, '../../app'))
        .inDir(SANDBOX)
        .withOptions({
          "skip-welcome-message": true
        })
        .withPrompts({
          "projectCode": 'MODTEST',
          "projectName": 'test-app',
          "projectDesc": 'My new test app'
        })
        .on('end', done);
    })
    .define("Then the expected folder structure and files are generated",
      function test(done) {
        //var fs = require("fs");
        //@todo add tests
        done();
      });
})();
