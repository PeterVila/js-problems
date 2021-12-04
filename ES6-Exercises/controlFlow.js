const getStatus = (host, user, booking) => {
    const obj = {
        pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
        canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
        done: `${host} hopes you had a great stay.`
    }
    return obj[booking.status] ? ? "Unknown booking status."
}


// Sample usage - do not modify
const booking1 = {
    status: "pending"
};
console.log(getStatus("Sam", "Alex", booking1)); // "Hey Alex, we're awaiting confirmation from Sam."
const booking2 = {
    status: "confirmed"
}
console.log(getStatus("Charlie", "Blake", booking2)); // "Hey Blake, Charlie is excited to be hosting you."