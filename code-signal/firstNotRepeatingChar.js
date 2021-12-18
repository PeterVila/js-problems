function solution(s) {
   for(let i = 0; i < s.length; i++) {
      let j = s.charAt(i)
      if (s.indexOf(j) == s.lastIndexOf(j)) {
        return j;
      }
   }
   return "_";
}

/* 
Input: string
Output: "_" if no duplicates OR the -first- instance of a character that doesnt repeat

1) Loop through every letter in the string
2) Set a variable to equal the letter at the index
3) Simply, indexOf() gets first occurrence of a character & lastIndexOf() gets the last occurrence. 
    - So when the first occurrence matches the last occurence, it means there's just one the character and return it
4) If no single occurences happen, return the string "_"
*/