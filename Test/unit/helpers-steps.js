"use strict";
/* Feature: helpers */
module.exports = (function testSuite() {
  var English = require("yadda").localisation.English;
  var assert = require("assert");
  var helpers = require('../../lib/helpers');
  return English.library()
    .define("Given function $func",
      function test(func, done) {
        this.world.func = helpers[func];
        done();
      })
    .define("Should accept good codes",
      function test(done) {
        assert(this.world.func('app'));
        assert(this.world.func('app1'));
        done();
      })
    .define("Should report errors for a name over 10 characters",
    function test(done) {
      assert.notEqual(this.world.func('appappappappappappapp'),true);
      done();
    })
    .define("Should accept good names",
    function test(done) {
      assert(this.world.func('app'));
      assert(this.world.func('app1'));
      assert(this.world.func('my_app'));
      assert(this.world.func('my-app'));
      assert(this.world.func('my.app'));
      done();
    })
    .define("Should report errors for text starting with .",
      function test(done) {
        assert.notEqual(this.world.func('.app'),true);
        done();
      })
    .define("Should report errors for text containing special chars",
    function test(done) {
      assert.notEqual(this.world.func('my app'),true);
      assert.notEqual(this.world.func('my/app'),true);
      assert.notEqual(this.world.func('my@app'),true);
      assert.notEqual(this.world.func('my+app'),true);
      assert.notEqual(this.world.func('my%app'),true);
      assert.notEqual(this.world.func('my:app'),true);
      done();
    })
    .define("Should report errors for text containing dot dash and underscore",
    function test(done) {
      assert.notEqual(this.world.func('my.app'),true);
      assert.notEqual(this.world.func('my-app'),true);
      assert.notEqual(this.world.func('my_app'),true);
      done();
    })
    .define("Should report errors for text as node_modules/favicon.ico",
    function test(done) {
      assert.notEqual(this.world.func('node_modules'),true);
      assert.notEqual(this.world.func('Node_Modules'),true);
      assert.notEqual(this.world.func('favicon.ico'),true);
      assert.notEqual(this.world.func('favicon.ICO'),true);
      done();
    });
})();
