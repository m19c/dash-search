'use strict';

var argv  = require('yargs').argv,
    spawn = require('child_process').spawn,
    dash;

if (argv.help) {
  console.log('Example usage:');
  console.log('');
  console.log('  d angular.isArray');
  console.log('');

  process.exit(0);
}

dash = spawn('open', [
  'dash://' + (argv._[0] || '')
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