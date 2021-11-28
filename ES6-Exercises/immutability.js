function testObjects() {
    console.log([] === []); //false
    console.log({} === {}); //false
    console.log([10] === [10]); //false
    console.log({
        key: "something"
    } === {
        key: "something"
    }); //false
}

testObjects();

const firstArray = [];
const secondArray = firstArray; // secondArray now points to firstArray
console.log(firstArray); // []
console.log(secondArray); // []

firstArray.push(10);
console.log(firstArray); // [10]
console.log(secondArray); // [10]

function immutableArrays() {
    const grades = [10, 20];
    const gradesCopy = [...grades];
    console.log(gradesCopy); // [10, 20] (new array, not linked to 'grades')
}

immutableArrays(); //Shallow Copy

function immutableObjects() {
    const user = {
        id: 1,
        age: 23
    };
    const clonedUser = {
        ...user,
        age: user.age + 1
    };
    console.log(clonedUser); // {id: 1, age: 24} (new object not related to 'user')
}

immutableObjects();

function immutableDelete() {
    const book = {
        id: 1,
        title: "Harry Potter",
        year: 2017,
        rating: 4.5
    }

    const {
        year,
        ...rest
    } = book;
    console.log(rest); // { id: 1, title: "Harry Potter", rating: 4.5}
    console.log(year); //2017
}

immutableDelete();