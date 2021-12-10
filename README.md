# My first Jest Tests

##### Examples of

Jest setup and tests  
IIFE Module Pattern  
ES6 Modules

### [Setup Jest](https://jestjs.io/docs/getting-started)

Create a package.json: `$ npm init -y`

Install Jest: `$ npm install --save-dev jest`

Add to package.json: `"scripts": {
  "test": "jest"
}`

Run tests: `$ npm test`

### [Add babel](https://jestjs.io/docs/en/getting-started#using-babel) to use ES6 modules

1. Install the @babel/preset-env package

`npm i -D @babel/preset-env`

2. Create a .babelrc file in the project’s root with the following lines of code:

`{ "presets": ["@babel/preset-env"] }`

### Notes

Test files end with **test.js** so Jest picks them up.
