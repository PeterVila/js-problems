const fakeFetch = () => {
    return new Promise(resolve => {
        const min = 1;
        const max = 3;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min; //random # between 2. (1-3 seconds fetch);
        setTimeout(() => {
            resolve();
        }, rand * 1000);
    });
}

const init = () => {
    fakeFetch().then(() => {
        console.log("Fake fetch completed");
    })
}

init();