const user = {
    details: {
        name: {
            firstName: "Sam"
        }
    },
    data: null
}

console.log(user.details?.name?.firstName); // "Sam"
console.log(user.data?.id); // undefined
console.log(user.children?.names); // undefined
console.log(user.details?.parent?.firstName); // undefined

const getPaymentValue = user => {
    return user.payment?.details?.value;
}

console.log(getPaymentValue({id: 1, name: "Alex"})); // undefined
console.log(getPaymentValue(
    {id: 2, 
    name: "Sam", 
    payment: 
        {details: {value: 59}}})); // 59

const getFullName = user => {
    return user.info?.name?.toLowerCase();
}

console.log(getFullName({info: {name: "ALEX"}})); // "alex"
console.log(getFullName({info: null})); // undefined
console.log(getFullName({})); // undefined