package utils;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Common {
    public static void goToHomePage() {
        GlobalConfig.driver.get(GlobalConfig.baseUrl);
        GlobalConfig.driver.manage().window().maximize();
        Assert.assertEquals("Google Translate", GlobalConfig.driver.getTitle());
    }

    public void clickElement (By element, int timeout) {
        WebDriverWait wait = new WebDriverWait(GlobalConfig.driver, timeout);
        wait.until(ExpectedConditions.elementToBeClickable(element));

        GlobalConfig.driver.findElement(element).click();
    }

    public void inputText (By element, String text, int timeout) {
        checkElementVisible(element, timeout);
        WebElement webElement = GlobalConfig.driver.findElement(element);
        webElement.clear();
        webElement.sendKeys(text);
    }

    public void checkElementVisible (By element, int timeout) {
        WebDriverWait wait = new WebDriverWait(GlobalConfig.driver, timeout);
        wait.until(ExpectedConditions.visibilityOfElementLocated(element));
    }

    public void verifyPageContainsText (String text) throws Exception {
        Boolean match = GlobalConfig.driver.getPageSource().contains(text);
        if (match == Boolean.FALSE) {
            throw new Exception("Page doesn't contain '" + text + "'");
        }
    }
}
