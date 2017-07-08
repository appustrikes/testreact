require('babel-register')();

var jsdom = require('jsdom').jsdom;
var sinon = require('sinon');
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
