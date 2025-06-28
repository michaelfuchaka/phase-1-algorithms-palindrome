function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Add your pseudocode here:
  1. Split the input string into an array of characters
  2. Reverse the array
  3. Join the reversed array back into a string
  4. Compare the reversed string with the original input
  5. Return true if they are the same, otherwise return false
*/

/*
  Add written explanation of your solution here:
  The function checks if a word is a palindrome. It does this by reversing the string 
  and comparing it to the original. If the reversed string is equal to the original, 
  the function returns true (it is a palindrome). Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;
