var expect = require('chai').expect;
var events = require('events');
var targz = require('../');

describe('Other tests', function() {
  describe('Event bubbling test', function() {
    it('Erros should bubble up using _bubble', function() {
      var emitters = [];
      var errors = [];

      for (var i = 0; i < 5; i++)
        emitters.push(new events.EventEmitter());

      targz.prototype._bubble.apply(null, emitters);
      emitters[0].on('error', function(err) {
        errors.push(err);
      });

      emitters.forEach(function(emitter, i) {
        emitter.emit('error', 'error' + i);
      });

      for (var b = 0; b < 5; b++)
        expect(errors[b]).to.be.equal('error' + b);
    });
  });
});
