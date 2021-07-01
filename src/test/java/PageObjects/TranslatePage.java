package PageObjects;

import org.openqa.selenium.By;
import utils.Common;
import utils.GlobalConfig;

public class TranslatePage {
    public static By inputTextBox = By.xpath("//textarea[@aria-label=\"Source text\"]");
    public static String spanTextReplace = "//span[text() = \"textToReplace\"]";

    public static void verifyTranslatedText(String text) throws Exception {
        String translatedText = spanTextReplace.replace("textToReplace", text);
        Common.checkElementVisible(By.xpath(translatedText), GlobalConfig.globalTimeout);
    }
}
