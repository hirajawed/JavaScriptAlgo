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
    return parseInt(reversed) * Math.sign(n); //the "Math.sign" function will give the
    //negative value to the negative no and positive value to the positive no.
    //input number if n < 0 we shouldl have a negative numbers.
}

module.exports = reverseInt;
