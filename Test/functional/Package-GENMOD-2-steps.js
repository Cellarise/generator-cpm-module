"use strict";
/* Feature: Package: Add default generator for modules */
module.exports = (function testSuite() {
  var English = require("yadda").localisation.English;
  var assert = require('yeoman-generator').assert;
  var path = require("path");
  var helpers = require("yeoman-generator").test;
  var SANDBOX =  path.resolve(__dirname, '../../Temp');
  var runCwd;

  if (typeof after !== "undefined") {
    after(function after(done) {
      var exec = require("child_process").exec;
      exec("cpm cleanFolder " + SANDBOX, {},
        function execCommandCallback() {
          //assert(!error); //this returns an error as it can't delete the Temp directory.
          //However, all files and folders contained within it are deleted.
          process.chdir(runCwd); //reset cwd
          done();
        });
    });
  }

  return English.library()
  /*Scenario: Generate a default module */
    .define("Given a new folder",
      function test(done) {
        runCwd = process.cwd(); //remember cwd
        helpers.testDirectory(SANDBOX, done);
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
    .define("Then the expected folder structure and files are generated",
      function test(done) {
        var dd;
        var ndd = require("node-dir-diff");
        var standardDir = path.resolve(__dirname, '../../app/templates/standard');
        var packageDir = path.resolve(__dirname, '../../Test_Resources');
        dd = new ndd.Dir_Diff(
          [
            SANDBOX,
            standardDir,
            packageDir
          ],
          "size");
        dd.compare(function ddCompare(err, result){
          assert(!err);
          assert(result.missing.length === 0);
          done();
        });
      });
})();