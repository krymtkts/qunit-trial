const pti = require('puppeteer-to-istanbul');
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.coverage.startJSCoverage();
    await page.goto(`file://${path.join(__dirname, '/index.html')}`);
    // wait for First Meaningfull Paint.
    await page.waitFor('#qunit-header');
    const jsCoverage = await page.coverage.stopJSCoverage();

    // excludes test tools.
    pti.write(jsCoverage.filter((entry) => entry.url.includes('sample.js')));
    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();
