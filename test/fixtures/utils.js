// Check if both path contains equal files
var crypto = require('crypto');
var fs = require('fs');

exports.equalFiles = function(file1, file2) {
  var sum1 = crypto.createHash('sha1');
  var sum2 = crypto.createHash('sha1');

  sum1.update(fs.readFileSync(file1));
  sum2.update(fs.readFileSync(file2));

  return sum1.digest('hex') === sum2.digest('hex');
};
