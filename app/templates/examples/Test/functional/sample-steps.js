"use strict";
/* Feature: Package: sample */
module.exports = (function testSuite() {
  var English = require("yadda").localisation.English;
  var assert = require("assert");
  return English.library()
    /*Scenario:  */
    .define("Given a newly generated module",
    function test(done) {
      assert(true);
      done();
    })
    .define("When calling the main library function",
    function test(done) {
      this.world.mainFunctionReturn = require("../../lib/index")("test data");
      assert(true);
      done();
    })
    .define("Then the expected data is returned",
    function test(done) {
      assert.equal(this.world.mainFunctionReturn, "test data");
      done();
    });
})();
