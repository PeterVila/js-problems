function solution(a) {
  const occurence = {};

  for (let i = 0; i < a.length; i++) {
    if (occurence[a[i]] !== undefined) {
        console.log(occurence, 'at return')
        return a[i];
    } else {
    occurence[a[i]] = i;
    }
  }
  return -1; //nothing found
}

/*Input: An Array of numbers
Output: The first duplicate number (the duplicate occurence with the minimal index), if not -1

create an empty object as we go thorugh each number
go through every element in the list
    push the elements as we go through the list, create it in the object with the value set to INDEX (so not repeat)  
    As soon as an element duplicate is found, return the VALUE, to get it at it's minimal index 
*/