function solution(a) {
    let output = [];
    for (let i = 0 ; i < a.length; i++) {
        output.push([]);
    }
    a.forEach(arr => {
        for (let x = 0; x < arr.length; x++) {
            output[x].unshift(arr[x]);
        }
    })
    console.log(output);
    return output
}

/*
Input: n x n 2d matrix
Output: 2d matrix but rotated 90 degrees

1) Create another array for how many elements(arrays) or in the original
2) Loop through each array in the original matrix
3) At every element(array), loop through it's given indexes and prepend its values to its corresponding index number in the loop
4) return the output
*/