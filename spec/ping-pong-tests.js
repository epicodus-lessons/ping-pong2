var expect = require('chai').expect;

var PingClassConstruct = require('./../js/ping-pong.js').PingProperty;

describe("pingpong", function(){
  var pingPongObject = new PingClassConstruct();

  it("returns array of numbers from 1 up to and including the input number when that number is < 3.", function() {
    expect(pingPongObject.pingPong(2)).to.eql([1, 2]);
  });

  it("replaces numbers divisible by 3 (and not 3)  with the word 'ping'.", function() {
    expect(pingPongObject.pingPong(3)).to.eql([1, 2, "ping"]);
  });

  it("replaces numbers divisible by 5 (and not 3) with the word 'pong'.", function() {
    expect(pingPongObject.pingPong(5)).to.eql([1, 2, "ping", 4, "pong"]);
  });

  it("replaces numbers divisible by both 5 and 3 with the word 'ping-pong'.", function() {
    expect(pingPongObject.pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong"]);
  });
});
