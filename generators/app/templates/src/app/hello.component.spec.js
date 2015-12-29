<% if (modules !== 'inject') { -%>
var angular = require('angular');
require('angular-mocks');
var app = require('../index');
<% } -%>

describe('hello component', function() {
<% if (modules !== 'inject') { -%>
  beforeEach(angular.mock.module(app));
<% } else { -%>
  beforeEach(angular.mock.module('app'));
<% } -%>
  it('should render hello world', angular.mock.inject(function($rootScope, $compile) {
    var element = $compile('<hello>Loading...</hello>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
