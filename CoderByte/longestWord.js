function LongestWord(sen) {
  const listWords = sen.match(/[a-zA-Z0-9]+/g);
  let longestWord = "";

  listWords.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
console.log(LongestWord(readline()));


/*
  Input: String
  Output: Longest word(string) from the input
  1) Find longest length of string
    a) String breaks after non numeric or non letter
    b) Use Regex?
  2) Create a variable for storing current longestWord
  3) Loop through the list of currents made from string
    a) For each index, check the current word length and the variable length
      b) If larger, then replace
  4) Return longest word
*/
