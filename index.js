const fs = require('fs');

const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function main() {
  let options = new chrome.Options();
  let driver = await new Builder()
    .forBrowser('chrome')
    .setSafariOptions(options)
    .build();

  await driver.get('https://d-toybox.com/studio/lib/input_event_viewer.html');

  await driver.findElement(By.id('editor')).click();
  await driver.findElement(By.id('editor')).sendKeys('Hello, World!');
  await driver.findElement(By.id('editor')).sendKeys(Key.ENTER);
  await driver.findElement(By.id('editor')).sendKeys(Key.chord('\uE040'));
  await driver.findElement(By.id('editor')).sendKeys('konnnitiwa');

  let encodedString = await driver.takeScreenshot();
  await fs.writeFileSync('./image.png', encodedString, 'base64');

  await driver.quit();
}
main();
