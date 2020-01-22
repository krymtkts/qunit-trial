#! /usr/bin/env node
// almost the same as the sample code :-p
// https://github.com/ameshkov/node-qunit-puppeteer

const fs = require('fs');
const path = require('path');
const { runQunitPuppeteer, printOutput } = require('node-qunit-puppeteer');

const qunitArgs = {
  targetUrl: `file://${path.join(__dirname, '/index.html')}`,
  redirectConsole: true
};

(async () => {
  try {
    var xml = `${path.join(__dirname, '/../junit/junit.xml')}`;
    // initialize xml file.
    fs.writeFile(xml, '', (err) => '')
    var log = console.log;
    console.log = function() {
      if (arguments[2]) { // black magic for pick logs from puppeteer.
        // write JUnit style xml.
        fs.appendFile(xml, arguments[2], (err) => {
          if (err) throw err;
        });
      } else {
        // normal logging.
        log.apply(null, arguments);
      }
    };

    const result = await runQunitPuppeteer(qunitArgs);
    // Print the test result to the output
    printOutput(result, console);
    if (result.stats.failed > 0) {
      // Handle the failed test run
      // currently notghing to do.
    }
  } catch (ex) {
    console.error(ex);
  }
})();
