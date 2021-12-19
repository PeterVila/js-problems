function sockMerchant(n, ar) {
    let pairs = 0;
    const sortedArray = ar.sort();
    for (let i = 0; i < n; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            i++;
            pairs++;
        }
        //Nothing happens if no match, next index
    }
    return pairs;
}

/*
Inputs: n = # of items in arr, ar = a # representing a color
Output: # of pairs in the pile(n)

1) Create a variable to represent our output counter which is # of pairs
2) Create a copy of the array and sort it since our list(ar) is numbers
3) Go through every item in our list(ar),
    - If the current item is equal to the next item,
        - Go to the next index + increase our counter by 1
    - Else, nothing happens
4) At the end of loop, return the amount of pairs found.
*/