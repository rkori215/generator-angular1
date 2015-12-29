<% if (modules !== 'inject') { -%>
var angular = require('angular');

var hello = require('./app/hello.component');

<% if (modules === 'webpack') { -%>
require('./index.scss');

<% } -%>
var app = 'app';
module.exports = app;

angular
  .module(app, [])
  .component('hello', hello);
<% } else { -%>
angular
  .module('app', []);
<% } -%>
