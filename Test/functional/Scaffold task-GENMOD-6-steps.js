"use strict";
/* Feature: Scaffold task: Add automatic population of project code, name and description from JIRA. */
module.exports = (function testSuite() {
  var English = require("yadda").localisation.English;
  var assert = require("assert");
  return English.library()
  /*Scenario:  */
    .define("Given",
      function test(done) {
        assert(true);
        done();
      })
    .define("When",
      function test(done) {
        assert(true);
        done();
      })
    .define("Then",
      function test(done) {
        assert(true);
        done();
      });
})();
