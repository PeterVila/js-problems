class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    canVote() {
        return this.age >= 18;
    }
}

class Admin extends User {
    constructor(firstName, lastName, age, userType) {
        super(firstName, lastName, age);
        this.userType = userType;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} [${this.userType}]`;
    }

    updateConfig() {
        return "Config updated";
    }
}

const user = new User("Sam", "Green", 17);
console.log(user.canVote()); // false
console.log(user.getFullName()); // "Sam Green"
const admin = new Admin("Alex", "Blue", 20, "superadmin");
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [superadmin]"
console.log(admin.updateConfig()); // "Config updated"