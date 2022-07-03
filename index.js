const fs = require('fs');

const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function main() {
  let options = new firefox.Options();
  let driver = await new Builder()
    .forBrowser('firefox')
    .setSafariOptions(options)
    .build();

  await driver.get('https://d-toybox.com/studio/lib/input_event_viewer.html');

  let encodedString = await driver.takeScreenshot();
  await fs.writeFileSync('./image.png', encodedString, 'base64');

  await driver.quit();
}
main();
