const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

const waitPromise = wait(1000);
console.log(waitPromise); // pending at this stage

waitPromise.then(() => {
    console.log("waited 1 second");
    console.log(waitPromise); // fulfilled at this stage
});

console.log(waitPromise); // pending at this stage