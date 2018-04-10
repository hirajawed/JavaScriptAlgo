// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}
  let max = 0; //max is the intial variable
  let maxChar = '';

  for(let char of str){ //FOR / OF Loop is used for iterating through an array or a string.
    if(charMap[char]){ //if the entry already exists in charMap it should increment by one
      charMap[char]++
    }else{ //if the entry does not exists we count it as 1 time.
      charMap[char] = 1;
    }
  }
  for(let char in charMap){ //WE are iterating thru an actual OBJECT so we use "in" in this method.
    if(charMap[char] > max){ //if the iterable object is greater than the current max value
      max = charMap[char];  //update the max value
      maxChar = char; //also update the character to the new max and return it at the bottom
    }
  }
  return maxChar;
}

module.exports = maxChar;


//we have iterate through charMap to find the most frequently used element.
