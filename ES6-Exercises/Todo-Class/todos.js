export default class Todos {
    // Do NOT modify the constructor
    constructor() {
        // we don't capture any parameters here
        // we're defining an array of todos with two example todos
        this.todos = [{
            title: "Learn JavaScript",
            category: "work"
        }, {
            title: "Meditate",
            category: "personal"
        }];
    }

    // TODO: define remaining instance methods
    getAll() {
        return this.todos;
    }

    getCount() {
        let count = 0;
        this.todos.forEach(() => {
            count += 1;
        })
        return count;
    }

    add(title, category) {
        const obj = {
            title,
            category
        }
        console.log(obj)
        this.todos.push(obj);
    }

    getWork() {
        const work = this.todos.filter(todo => {
            if (todo.category === "work") {
                return todo;
            }
        })
        return work;
    }

    getWorkCount() {
        const count = this.getWork();
        return count.length;
    }

    getPersonal() {
        const personal = this.todos.filter(todo => {
            if (todo.category === "personal") {
                return todo;
            }
        })
        return personal;
    }

    getPersonalCount() {
        const count = this.getPersonal();
        return count.length;
    }
}