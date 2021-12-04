class Mobile {
    constructor(phone, cost) {
        this.phone = phone;
        this.cost = cost;
    }
    getDescription() {
        return `The ${this.phone} costs ${this.cost}`
    }
}

class Android extends Mobile {
    getVersion() {
        return "12"
    }
}

class iOS extends Android {
    getVersion() {
        return "15"
    }
}

const galaxy = new Android("Galaxy", 400);
console.log(galaxy.getDescription()); // "The Galaxy costs 400"
console.log(galaxy.getVersion()); // 12 (always for android phones)
const iphone = new iOS("iPhone", 500);
console.log(iphone.getDescription()); // "The iPhone costs 500"
console.log(iphone.getVersion()); // 15 (always for iOS phones)