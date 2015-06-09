'use strict';

var argv          = require('yargs').argv,
    spawn         = require('child_process').spawn,
    resolveDocSet = require('./resolve-doc-set'),
    dash, query, docSet;

if (argv.help) {
  console.log('Example usage:');
  console.log('');
  console.log('  d angular.isArray');
  console.log('');

  process.exit(0);
}

if (argv._.length === 2) {
  docSet = argv._[0];
  query  = argv._[1];
} else {
  query = argv._[0];
}

dash = spawn('open', [
  'dash://' + ((docSet) ? resolveDocSet(docSet) + ':' : '') + (query || '')
]);

dash.stdout.on('data', function (data) {
  console.log(data);
});

dash.stderr.on('data', function (data) {
  console.log(data);
});

dash.on('close', function () {
  process.exit(0);
});