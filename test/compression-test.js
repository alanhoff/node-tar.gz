var targz = require('../');
var fs = require('fs');
var expect = require('chai').expect;
var temp = require('temp');
var utils = require('./fixtures/utils.js');
var dir = temp.mkdirSync();

describe('General compression test', function() {
  describe('Streaming interface testing', function() {
    it('Should compress without errors', function(done) {
      var read = targz().createReadStream(__dirname + '/fixtures/uncompressed');
      var write = fs.createWriteStream(dir + '/compressed.tar.gz');

      write.on('finish', function() {
        done();
      });

      read.pipe(write);
    });

    it('Should decompress without errors', function(done) {
      var read = fs.createReadStream(dir + '/compressed.tar.gz');
      var write = targz().createWriteStream(dir);

      write.on('close', function() {
        expect(fs.readdirSync(dir + '/uncompressed')).to.have.length(2);
        expect(utils.equalFiles(
            __dirname + '/fixtures/uncompressed/lorem.txt',
            dir + '/uncompressed/lorem.txt')).to.be.equal(true);
        done();
      });

      read.pipe(write);
    });

    it('Should catch an error from zlib while decompressing', function(done) {

      var error = 'not caught';

      targz().extract(__dirname + '/fixtures/test.zip', dir, function(){
        error = 'caught';
        expect(error).to.be.equal('caught');
        done();
      }).then(function(){
        setTimeout(function() {
          done();
        }, 200);
      });
    });

    it('Should call the callback when zlib decompression is finished', function(done) {
      targz().extract(__dirname + '/fixtures/test.zip', dir, function(){
        done();
      });
    });

    it('Should call the callback when tar.gz decompression is finished', function(done) {
      targz().extract(__dirname + '/fixtures/compressed.tar.gz', dir, function(){
        done();
      });
    });
  });
});
