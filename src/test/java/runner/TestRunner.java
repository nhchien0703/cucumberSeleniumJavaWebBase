package runner;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/java/features"},
        format = {"json:src/report/cucumber.json", "html:src/report/cucumberhtmlreport"},
        glue = "steps"
)
public class TestRunner {}
