Feature: helpers

  Scenario: validateProjectName()

    Given function validateProjectName
    Should accept good names
    Should report errors for text starting with .
    Should report errors for text containing special chars
    Should report errors for text as node_modules/favicon.ico

  Scenario: validateCode()

    Given function validateCode
    Should accept good codes
    Should report errors for a name over 10 characters
    Should report errors for text containing special chars
    Should report errors for text starting with .
    Should report errors for text containing dot dash and underscore
    Should report errors for text as node_modules/favicon.ico