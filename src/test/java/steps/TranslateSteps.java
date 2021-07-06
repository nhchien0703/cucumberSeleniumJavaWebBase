package steps;

import PageObjects.TranslatePage;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pojo.SearchString;
import utils.Common;
import utils.GlobalConfig;

import java.util.ArrayList;
import java.util.List;

public class TranslateSteps {
    GlobalConfig appConf = new GlobalConfig();
    Common common = new Common();
    TranslatePage translatePage = new TranslatePage();

    @Before
    public void beforeEachScenario() {
        System.out.println("This will be run before each scenario");
        common.goToHomePage();
    }

    @After
    public void afterEachScenario() {
        GlobalConfig.driver.close();
        GlobalConfig.driver.quit();
    }

    @Given("^I am in google translate page$")
    public void iAmInGoogleTranslatePage() {
        common.goToHomePage();
    }

    @When("^I input a text to input textbox$")
    public void iInputATextToInputTextbox() {
        common.inputText(translatePage.inputTextBox, "just to test", GlobalConfig.globalTimeout);
    }

    @Then("^The result will show the translate result$")
    public void theResultWillShowTheTranslateResult() throws Exception {
        translatePage.verifyTranslatedText("just to test");
    }

    @Then("^The result will show the translate result FAIL$")
    public void theResultWillShowTheTranslateResultFAIL() throws Exception {
        throw new Exception("Fail this test");
    }

    @When("^I input the following text to textbox$")
    public void iInputTheFollowingTextToTextbox(DataTable table) {
        List<SearchString> searchStrings = table.asList(SearchString.class);
        common.inputText(translatePage.inputTextBox, searchStrings.get(1).searchtext, GlobalConfig.globalTimeout);
    }

    @Then("^The result will show the following text$")
    public void theResultWillShowTheFollowingText(DataTable table) throws Exception {
        List<SearchString> searchStrings = table.asList(SearchString.class);
        translatePage.verifyTranslatedText(searchStrings.get(1).searchtext);

    }

    @When("^I input text ([^\"]*) to input textbox$")
    public void iInputTextTextToInputTextbox(String text) {
        common.inputText(translatePage.inputTextBox, text, GlobalConfig.globalTimeout);
    }

    @Then("^The result will show the translate result as ([^\"]*)$")
    public void theResultWillShowTheTranslateResultAsTranslateText(String text) throws Exception {
        translatePage.verifyTranslatedText(text);
    }
}
