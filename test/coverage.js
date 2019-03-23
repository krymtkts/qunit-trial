const pti = require('puppeteer-to-istanbul');
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.coverage.startJSCoverage();
    await page.goto(`file://${path.join(__dirname, '/index.html')}`);
    const jsCoverage = await page.coverage.stopJSCoverage();

    pti.write(jsCoverage);
    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
