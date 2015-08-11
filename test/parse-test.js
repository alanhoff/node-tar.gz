var targz = require('../');
var fs = require('fs');
var expect = require('chai').expect;

describe('Parse stream interface tests', function() {
  it('Should be able to list files', function(done) {
    var read = fs.createReadStream(__dirname + '/fixtures/compressed.tar.gz');
    var parse = targz().createParseStream();
    var files = [];

    parse.on('entry', function(entry) {
      files.push(entry.path);
    });

    parse.on('end', function() {
      expect(files[0]).to.be.equal('uncompressed/');
      expect(files[1]).to.be.equal('uncompressed/ipsum.txt');
      expect(files[2]).to.be.equal('uncompressed/lorem.txt');
      done();
    });

    read.pipe(parse);
  });
});
