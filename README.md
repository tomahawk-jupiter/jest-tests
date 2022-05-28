# My first Jest Tests

Testing functions with [Jest](https://jestjs.io/docs/getting-started). An Odin Project assignment.

## Contents

- [Concepts](#concepts)
- [Overview](#overview)
- [Jest Setup](#jest-setup)
- [Using Jest](#using-jest)
- [More](#more)

## Concepts

Testing with Jest  
IIFE Module Pattern  
ES6 Modules

## Overview

The `code` folder contains self contained functions and the `tests` folder contains self contained tests for each of these functions.

The functions will be imported into the appropriate test file and tested.

The `calculator.js` file contains an IIFE (Immediately Invoked Function Expression) that returns basic calculator operation functions.

## Jest Setup

[Setup Jest Docs](https://jestjs.io/docs/getting-started)

### Create a package.json

    $ npm init -y

### Install Jest as a dev dependency

    $ npm install --save-dev jest

### Add to script to package.json

    "scripts": {
      "test": "jest"
      }

See [Options](#options) for some options you can use when using Jest.

### Run tests

    $ npm test

### Add babel to use ES6 modules

Jest Docs [using babel](https://jestjs.io/docs/en/getting-started#using-babel).

Install the @babel/preset-env package

    npm i -D @babel/preset-env

Create a .babelrc file in the project’s root with the following lines of code:

    { "presets": ["@babel/preset-env"] }

## Using Jest

Look in the test files to see examples of using the jest syntax. Its pretty self explanatory. See the jest docs for more. [Jest using matchers](https://jestjs.io/docs/using-matchers).

### Naming test files

Test files end with **test.js** so Jest picks them up.

### Options

This will give more info as the tests run (change in package.json):

    "test": "jest --verbose"

There are other options available, see [Jest CLi Options](https://jestjs.io/docs/cli#running-from-the-command-line).

Another usefule one is `--watch` or `--watchAll`. These will run tests when there are changes.

## More

### Asynchronous Tests

Jest can also be used with Promises or Async & Await. [Jest Asynchronous Docs](https://jestjs.io/docs/asynchronous).

### Setup and Teardown

Sometimes there needs to be some preperation before tests are run, like when using databases. [Jest Setup-teardown Docs](https://jestjs.io/docs/setup-teardown).

[Page top](#contents)
