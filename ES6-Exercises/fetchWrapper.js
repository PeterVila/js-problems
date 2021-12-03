class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    get(endPoint) {
        return fetch(this.baseURL + endPoint, {
            method: "GET",
            headers: {
                // send a header with every GET request
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
}

try {
    const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

    API.get("/notifications/new.json").then(data => {
        console.log(data);
    });
} catch (error) {}