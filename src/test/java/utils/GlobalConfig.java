package utils;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class GlobalConfig {
    public static String baseUrl = "https://translate.google.com";
    public static WebDriver driver;
    public static int globalTimeout = 5;

    public GlobalConfig() {
        System.setProperty("webdriver.chrome.driver", "src/driver/chromedriver.exe");
        driver = new ChromeDriver();
    }

    public static void goToHomePage() {
        driver.get(baseUrl);
        driver.manage().window().maximize();
        Assert.assertEquals("Google Translate", driver.getTitle());
    }
}
