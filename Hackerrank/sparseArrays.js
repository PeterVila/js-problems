// Sparse Arrays

function matchingStrings(strings, queries) {
    // Write your code here
    const amount = queries.map(query => {
        let count = 0;
        for (let i = 0; i < strings.length; i++) {
            if (query === strings[i]) {
                count++;
            }
        }
        return count;
    })
    return amount;
}

//Test case 
matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']);

//     Description - There is a collection of input strings and a collection of query strings -
//     For each query string, determine how many times it occurs in the input string -
//     Return: An array of the results

// Ex)

// -
// `strings` = ['ab', 'ab', 'abc'] -
// `queries` = ['ab', 'abc', 'bc'] -
// There are 2 instances of 'ab', 1 of 'abc'
// and 0 of 'bc' -
//     Result would be[2, 1, 0]