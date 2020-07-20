'use strict';

var exec = require( 'child_process' ).exec;
var pkg = require( '../package.json' );
var calculatr = './calculatr.js';
require( 'should' );

describe( 'Calculatr', function() {
  it( 'Should return version of calculatr', function( done ) {
    exec( calculatr + ' --version', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.replace( '\n', '' ).should.be.equal( pkg.version );
      done();
    });
  });
});