Feature: Package: Add default generator for modules
  As a developer
  I can scaffold modules automatically
  So that I can efficiently and reliably setup a new module

  @linked=GENMOD-16
  Scenario: Generate a default module

      Given a new folder
      When calling the generator
      Then the expected folder structure and files are generated

  Scenario: Generate a module skipping greeting

    Given a new folder
    When calling the generator skipping the greeting
    Then the expected folder structure and files are generated