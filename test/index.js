var angularify = require('..');
var expect = require('chai').expect;
var fs = require('fs');
var streamEqual = require('stream-equal');

describe('angularify', function() {
  it('should register a basic controller', function() {
    var stream = fs.createReadStream(__dirname + '/input/basic-controller.js')
      .pipe(angularify());

    var expected = fs.createReadStream(__dirname + '/expected/basic-controller-angularified.js');

    streamEqual(stream, expected, function(err, equal) {
      expect(equal).to.be.true;
    });
  });
});
