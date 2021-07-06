package PageObjects;

import org.openqa.selenium.By;
import utils.Common;
import utils.GlobalConfig;

public class TranslatePage {
    public Common common = new Common();

    public By inputTextBox = By.xpath("//textarea[@aria-label=\"Source text\"]");
    public String spanTextReplace = "//span[text() = \"textToReplace\"]";

    public void verifyTranslatedText(String text) throws Exception {
        String translatedText = spanTextReplace.replace("textToReplace", text);
        common.checkElementVisible(By.xpath(translatedText), GlobalConfig.globalTimeout);
    }
}
