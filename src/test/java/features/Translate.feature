Feature: Test google translate

  Scenario: Try to test a translate case
    Given I am in google translate page
    When I input a text to input textbox
    Then The result will show the translate result

  Scenario: Try to test a translate case FAIL
    Given I am in google translate page
    When I input a text to input textbox
    Then The result will show the translate result FAIL