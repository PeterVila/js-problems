function diagonalDifference(arr) {
    let i = 0;
    let opposite = arr[0].length - 1;
    let empty = 0;
    let rightempty = 0;
    arr.map(ar => {
        empty += ar[i]
        i++;
        rightempty += ar[opposite]
        opposite--;
    })
    console.log({arr})
    console.log({empty});
    console.log({rightempty});
    return Math.abs(empty - rightempty)
    //Example) Given array of [[11,2,4],[4,5,6],[10,8,-12]]
    //Create an initial value to read left-right diagonally
    //Create an initial value to read right-left diagonally
    //Set outputs for sums for l2r and r2l
    //Map through the array given
        //At each index, increment l2r initial
            //Decrement r2l initial
        //Add each current value to respected sum outputs
    //return the absolute value of both sums
}