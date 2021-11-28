const runCode = () => {
    // console.log("Step 1");
    // getData();
    // console.log("Step 2");
    try {
        console.log("Step 1");
        getData();
    } catch {
        console.log("Step 2");
    }
}

// Sample usage - do not modify
runCode();

const getDate = () => {
    // this function fails 50% of the time
    if (Math.random() < 0.5) {
        // fail
        throw Error("An error has occurred");
    } else {
        //return current date
        const date = new Date();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}

const showDate = () => {
    try {
        const date = getDate();
        return date;
    } catch {
        return "Could not get date";
    }
}

// Sample usage - do not modify
console.log(showDate());