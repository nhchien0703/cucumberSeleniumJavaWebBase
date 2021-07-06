Feature: Test google translate

  Scenario: Try to test a translate case
    Given I am in google translate page
    When I input a text to input textbox
    Then The result will show the translate result

  Scenario: Try to test a translate case using parameter
    Given I am in google translate page
    When I input the following text to textbox
      | searchtext            |
      | test in put parameter |
    Then The result will show the following text
      | translatetext         |
      | test in put parameter |

  Scenario Outline: Try to test a multiple translate cases
    Given I am in google translate page
    When I input text <Text> to input textbox
    Then The result will show the translate result as <Translate Text>
    Examples:
      | Text           | Translate Text |
      | example text 1 | example text 1 |
      | example text 2 | example text 2 |

  Scenario: Try to test a translate case FAIL
    Given I am in google translate page
    When I input a text to input textbox
    Then The result will show the translate result FAIL