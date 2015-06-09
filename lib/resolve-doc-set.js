var registry = {
  angular: 'AngularJS',
  ng: 'AngularJS',
  js: 'javascript',
  $: 'jquery'
};

module.exports = function resolveDocSet(value) {
  'use strict';

  return (registry[value]) ? registry[value] : value;
};