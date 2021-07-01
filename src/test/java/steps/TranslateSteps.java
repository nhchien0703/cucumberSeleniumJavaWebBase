package steps;

import PageObjects.TranslatePage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.Common;
import utils.GlobalConfig;

public class TranslateSteps {
    GlobalConfig appConf = new GlobalConfig();

    @Before
    public void beforeEachScenario() {
        System.out.println("This will be run before each scenario");
    }

    @After
    public void afterEachScenario() {
        GlobalConfig.driver.close();
        GlobalConfig.driver.quit();
    }

    @Given("^I am in google translate page$")
    public void iAmInGoogleTranslatePage() {
        GlobalConfig.goToHomePage();
    }

    @When("^I input a text to input textbox$")
    public void iInputATextToInputTextbox() {
        Common.inputText(TranslatePage.inputTextBox, "just to test", GlobalConfig.globalTimeout);
    }

    @Then("^The result will show the translate result$")
    public void theResultWillShowTheTranslateResult() throws Exception {
        TranslatePage.verifyTranslatedText("just to test");
    }

    @Then("^The result will show the translate result FAIL$")
    public void theResultWillShowTheTranslateResultFAIL() throws Exception {
        throw new Exception("Fail this test");
    }
}
