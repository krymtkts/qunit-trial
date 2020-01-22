#!/bin/bash

sudo -u pptruser npm run test
cp /usr/src/junit/junit.xml /junit/junit.xml

sudo -u pptruser npm run coverage
cp /usr/src/coverage/* /coverage
