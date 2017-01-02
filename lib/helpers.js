'use strict';

/**
 * Validate application (module) name
 * @param {String} name - application name
 * @returns {String|Boolean} true if valid name or a message identifying the validation error
 */
var validateProjectName = function validateProjectName(name) {
  if (name.charAt(0) === '.') {
    return 'Cannot start with .: ' + name;
  }
  if (name.match(/[\/@\s\+%:]/)) {
    return 'Cannot contain special characters (/@\\s\\+%: ): ' +
      name;
  }
  if (name.toLowerCase() === 'node_modules') {
    return 'Cannot be node_modules';
  }
  if (name.toLowerCase() === 'favicon.ico') {
    return 'Cannot be favicon.ico';
  }
  if (name !== encodeURIComponent(name)) {
    return 'Cannot contain special characters escaped by ' +
      'encodeURIComponent: ' + name;
  }
  return true;
};

/**
 * Validate project code
 * @param {String} code - The user input
 * @returns {String|Boolean} true if valid name or a message identifying the validation error
 */
var validateCode = function validateCode(code) {
  if (code.match(/[._-]/)) {
    return 'Cannot contain special characters (._-): ' + code;
  }
  if (code.length > 10){
    return "Must be less than or equal to 10";
  }
  return validateProjectName(code);
};

exports.validateProjectName = validateProjectName;
exports.validateCode = validateCode;
