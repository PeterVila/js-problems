function pangrams(s) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    console.log(alphabet);
    for (let i = 0; i < s.length; i++) {
        for (let x = 0; x < alphabet.length; x++) {
            if (s[i].toLowerCase() === alphabet[x]) {
                alphabet.splice(x, 1)
            }
        }
    }
    console.log(alphabet, 'after');
    if (alphabet.length === 0) {
        return 'pangram'
    }
    return 'not pangram'
}

/*Pangram = a string that contains All letters of the alphabet.
Input: A string
Output: A string "pangram" or "not pangram"

- Declare an array named alpha, and fulfill it with integer that represent charCode from string
- Fill it with the length of 26. After that, in second line, by using map function i change all the number from every element in alpha become string and save it into variable name alphabet.
- Go through every character of the given input string
    -At every character, go through every index of the alphabet and check if it matches
    -toLowerCase() the string given so it matches our alphabet array we created
        -If a match is found, splice out the letter in our alphabet array
-Once the loops are finished, if our alphabet list is empty, return 'pangram'
    -Else, return 'not pangram'
*/