// const {Builder} = require("selenium-webdriver");
// const google = require("selenium-webdriver/chrome");
// const options = new google.Options();

var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var o = new chrome.Options();
o.addArguments("--user-data-dir=/Users/las noche/Library/Application Support/Google/Chrome/Default/Profile 3");
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome())
            .setChromeOptions(o).build(); 

driver.get("http://google.com");
