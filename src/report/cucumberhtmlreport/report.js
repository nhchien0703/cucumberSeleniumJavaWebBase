$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Translate.feature");
formatter.feature({
  "line": 1,
  "name": "Test google translate",
  "description": "",
  "id": "test-google-translate",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2123284348,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Try to test a translate case",
  "description": "",
  "id": "test-google-translate;try-to-test-a-translate-case",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in google translate page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I input a text to input textbox",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The result will show the translate result",
  "keyword": "Then "
});
formatter.match({
  "location": "TranslateSteps.iAmInGoogleTranslatePage()"
});
formatter.result({
  "duration": 6298805217,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.iInputATextToInputTextbox()"
});
formatter.result({
  "duration": 272768930,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.theResultWillShowTheTranslateResult()"
});
formatter.result({
  "duration": 1073422255,
  "status": "passed"
});
formatter.after({
  "duration": 2708004786,
  "status": "passed"
});
formatter.before({
  "duration": 1771712785,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Try to test a translate case FAIL",
  "description": "",
  "id": "test-google-translate;try-to-test-a-translate-case-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am in google translate page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I input a text to input textbox",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The result will show the translate result FAIL",
  "keyword": "Then "
});
formatter.match({
  "location": "TranslateSteps.iAmInGoogleTranslatePage()"
});
formatter.result({
  "duration": 6629171466,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.iInputATextToInputTextbox()"
});
formatter.result({
  "duration": 189547084,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.theResultWillShowTheTranslateResultFAIL()"
});
formatter.result({
  "duration": 258045,
  "error_message": "java.lang.Exception: Fail this test\r\n\tat steps.TranslateSteps.theResultWillShowTheTranslateResultFAIL(TranslateSteps.java:43)\r\n\tat ✽.Then The result will show the translate result FAIL(Translate.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2702873978,
  "status": "passed"
});
});