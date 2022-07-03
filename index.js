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

  await driver.findElement(By.id('editor').sendKeys('Hello, World!'));

  let encodedString = await driver.takeScreenshot();
  await fs.writeFileSync('./image.png', encodedString, 'base64');

  await driver.quit();
}
main();
