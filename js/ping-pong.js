// create constructor function
var PingClassConstruct = function(args) {

};

// add prototypes
PingClassConstruct.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 == 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

// put constructor onto exports as a property and it pulls the prototypes with it.

exports.PingProperty = PingClassConstruct;
