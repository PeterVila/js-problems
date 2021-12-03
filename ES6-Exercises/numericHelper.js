export default class NumericHelper {
    constructor(number) {
        this.number = number
    }

    isEven() {
        return this.number % 2 === 0;
    }

    isOdd() {
        return this.number % 2 === 1;
    }
}