import NumericHelper from "./numericHelper.js"
const isEvenNumber = number => {
    // Use NumericHelper's isEven method to check if it's even
    const newNumber = new NumericHelper(number);
    if (newNumber.isEven()) {
        return newNumber.isEven()
    } else {
        return false
    }
}

console.log(isEvenNumber(2)); // true
console.log(isEvenNumber(3)); // false