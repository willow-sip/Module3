"use strict;" 
//The Enigma Machine - Part 1: The Plugboard
Plugboard = function (wires) {
  if (typeof wires !== "string") {
    wires = "";
  }
  if (wires.length % 2 !== 0) {
    throw new Error("Invalid wire definition: odd length");
  }
  if (wires.length > 20) {
    throw new Error("Too many wires defined")
  };

  let seen = new Set();
  for (let char of wires) {
    if (seen.has(char)) {
      throw new Error("Wire end defined more than once");
    }
    seen.add(char);
  }

  this.pairs = wires.match(/.{2}/g) || [];
  this.process = function (char) {
    for (let pair of this.pairs) {
      if (pair.includes(char)) {
        return char === pair[0] ? pair[1] : pair[0];
      }
    }
    return char;
  };
}
