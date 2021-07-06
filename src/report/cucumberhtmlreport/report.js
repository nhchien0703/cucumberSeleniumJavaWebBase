$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Translate.feature");
formatter.feature({
  "line": 1,
  "name": "Test google translate",
  "description": "",
  "id": "test-google-translate",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9001179762,
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
  "duration": 1576094473,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.iInputATextToInputTextbox()"
});
formatter.result({
  "duration": 186233992,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.theResultWillShowTheTranslateResult()"
});
formatter.result({
  "duration": 1070549564,
  "status": "passed"
});
formatter.after({
  "duration": 2674764851,
  "status": "passed"
});
formatter.before({
  "duration": 8976047948,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Try to test a translate case using parameter",
  "description": "",
  "id": "test-google-translate;try-to-test-a-translate-case-using-parameter",
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
  "name": "I input the following text to textbox",
  "rows": [
    {
      "cells": [
        "searchtext"
      ],
      "line": 11
    },
    {
      "cells": [
        "test in put parameter"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The result will show the following text",
  "rows": [
    {
      "cells": [
        "translatetext"
      ],
      "line": 14
    },
    {
      "cells": [
        "test in put parameter"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TranslateSteps.iAmInGoogleTranslatePage()"
});
formatter.result({
  "duration": 1791717005,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.iInputTheFollowingTextToTextbox(DataTable)"
});
formatter.result({
  "duration": 217349070,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.theResultWillShowTheFollowingText(DataTable)"
});
formatter.result({
  "duration": 1046626736,
  "status": "passed"
});
formatter.after({
  "duration": 2667617607,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Try to test a multiple translate cases",
  "description": "",
  "id": "test-google-translate;try-to-test-a-multiple-translate-cases",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am in google translate page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I input text \u003cText\u003e to input textbox",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The result will show the translate result as \u003cTranslate Text\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "test-google-translate;try-to-test-a-multiple-translate-cases;",
  "rows": [
    {
      "cells": [
        "Text",
        "Translate Text"
      ],
      "line": 22,
      "id": "test-google-translate;try-to-test-a-multiple-translate-cases;;1"
    },
    {
      "cells": [
        "example text 1",
        "example text 1"
      ],
      "line": 23,
      "id": "test-google-translate;try-to-test-a-multiple-translate-cases;;2"
    },
    {
      "cells": [
        "example text 2",
        "example text 2"
      ],
      "line": 24,
      "id": "test-google-translate;try-to-test-a-multiple-translate-cases;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8527868322,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Try to test a multiple translate cases",
  "description": "",
  "id": "test-google-translate;try-to-test-a-multiple-translate-cases;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am in google translate page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I input text example text 1 to input textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The result will show the translate result as example text 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TranslateSteps.iAmInGoogleTranslatePage()"
});
formatter.result({
  "duration": 1781297288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example text 1",
      "offset": 13
    }
  ],
  "location": "TranslateSteps.iInputTextTextToInputTextbox(String)"
});
formatter.result({
  "duration": 179065705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example text 1",
      "offset": 45
    }
  ],
  "location": "TranslateSteps.theResultWillShowTheTranslateResultAsTranslateText(String)"
});
formatter.result({
  "duration": 1043607925,
  "status": "passed"
});
formatter.after({
  "duration": 2681205467,
  "status": "passed"
});
formatter.before({
  "duration": 8459796637,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Try to test a multiple translate cases",
  "description": "",
  "id": "test-google-translate;try-to-test-a-multiple-translate-cases;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I am in google translate page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I input text example text 2 to input textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The result will show the translate result as example text 2",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TranslateSteps.iAmInGoogleTranslatePage()"
});
formatter.result({
  "duration": 1505143374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example text 2",
      "offset": 13
    }
  ],
  "location": "TranslateSteps.iInputTextTextToInputTextbox(String)"
});
formatter.result({
  "duration": 178219387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example text 2",
      "offset": 45
    }
  ],
  "location": "TranslateSteps.theResultWillShowTheTranslateResultAsTranslateText(String)"
});
formatter.result({
  "duration": 1043177752,
  "status": "passed"
});
formatter.after({
  "duration": 2676426512,
  "status": "passed"
});
formatter.before({
  "duration": 7879848726,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Try to test a translate case FAIL",
  "description": "",
  "id": "test-google-translate;try-to-test-a-translate-case-fail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I am in google translate page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I input a text to input textbox",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "The result will show the translate result FAIL",
  "keyword": "Then "
});
formatter.match({
  "location": "TranslateSteps.iAmInGoogleTranslatePage()"
});
formatter.result({
  "duration": 2039265865,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.iInputATextToInputTextbox()"
});
formatter.result({
  "duration": 159126655,
  "status": "passed"
});
formatter.match({
  "location": "TranslateSteps.theResultWillShowTheTranslateResultFAIL()"
});
formatter.result({
  "duration": 366466,
  "error_message": "java.lang.Exception: Fail this test\r\n\tat steps.TranslateSteps.theResultWillShowTheTranslateResultFAIL(TranslateSteps.java:51)\r\n\tat ✽.Then The result will show the translate result FAIL(Translate.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2671864982,
  "status": "passed"
});
});