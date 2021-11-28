// The nullish coalescing ?? operator is a new operator introduced in JavaScript that allows you to default to a certain value when the left-hand side is a nullish value.

const getName = name => {
    return name ?? "N/A";
}

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
console.log(getName(null)); // "N/A"

const getPlaceholder = () => {
    console.log("getPlaceholder called");
    return "N/A";
}

const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`;
}

console.log(sayHello("Sam")); // "Hello Sam"