// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Soltion 2
function reverse(str) {
   let reversed = '';

   for (let character of str){ //Creating a character
   //and iterating over all characters in the strings
   reversed = character + reversed;
   debugger;
 }
   return reversed;
//
}
reverse('asdf');

module.exports = reverse;

//Solution 1
// function reverse(str) {
    /*Method One
    const arr = str.split(''); //returns the different characters in each string
    arr.reverse();
    return arr.join('');
    */
//Or   return str.split('').reverse().join('');
//  }





// function reverse(str) {
//   debugger;
//   return str.split('').reduce((rev, char) => char + rev, '');
//
//
// //Turn it into an array (str.split(''))
// //Reduce takes all values and reduces it to one single value
// //Reduce taken in two values.. first is the reversed string
// //second is the starting intital value for the function
// }
