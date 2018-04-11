// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join(''); //turn the number into a string first
  //then split, reverse, then join

return parseInt(reversed) * Math.sign(n); //the sign will give the negative value to negative and positive value to positive number.
}

module.exports = reverseInt;
//testing
