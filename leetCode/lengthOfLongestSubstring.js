/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let currentString = [];
    let longestStringLength = 0;
    for (let i = 0; i < s.length; i++) {
        const currentCharacterPosition = currentString.indexOf(s[i]);
        if (currentCharacterPosition !== -1) {
            currentString.splice(0, currentCharacterPosition + 1);
        }
        currentString.push(s[i]);
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};

/*
Input: a String
Output: The longest substring length (number)

1. Initialize an array for storing current string
2. Initialize a variable for storing current longestStringLength
3. Loop through the input string
    1. Use indexOf to check if the current character in the loop is in the current string Array
    2. IF we get -1 from indexOf, it means it exists, 
        - take out the occurence of the character that already exists 
    3. ELSE push the current character into currentString Array
    4. Using Math.max, find out if our varaible longestStringLength or currentString.length is higher
4. Return the longestStringLength variable
*/