var modules = [
  "HomeModule",
  'RestServiceModule'

];

var app = angular.module('LandingPage', modules, function($interpolateProvider){

    //set custom delimiters for angular templates
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');

});