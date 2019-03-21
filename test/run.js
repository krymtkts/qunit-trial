#! /usr/bin/env node
// almost the same as the sample code :-p
// https://github.com/ameshkov/node-qunit-puppeteer

const path = require('path');
const {runQunitPuppeteer, printOutput} = require('node-qunit-puppeteer');

const qunitArgs = {
  targetUrl: `file://${path.join(__dirname, '/index.html')}`,
  redirectConsole: true,
};

runQunitPuppeteer(qunitArgs)
    .then((result) => {
    // Print the test result to the output
      printOutput(result, console);
      if (result.stats.failed > 0) {
      // Handle the failed test run
      // currently notghing to do.
      }
    })
    .catch((ex) => {
      console.error(ex);
    });
