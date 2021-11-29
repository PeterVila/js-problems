// Lonely Integer
function lonelyinteger(a) {
    // Write your code here
    const obj = {};
    for (let i = 0; i < a.length; i++) {
        if (!obj[a[i]]) {
            obj[a[i]] = 1;
        } else {
            obj[a[i]] = obj[a[i]] + 1;
        }
    }
    console.log(obj);
    let output = null;
    for (let key in obj) {
        if (obj[key] === 1) {
            output = key;
        }
    }
    return output;
}

//     Description - Given an array of integers, where all elements but one occur twice, find the unique element. -
//     Input: An Array -
//     Output: Unique Element

// Ex)
// -
// a = [1, 2, 3, 4, 3, 2, 1] -
//     Result = `4`

// Test Case
lonelyInteger([1, 2, 3, 4, 3, 2, 1])