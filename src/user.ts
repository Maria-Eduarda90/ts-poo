class User {
    name: string;
    email: string;
    active?: boolean = true;

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }
}

const user = new User("Maria", "Maria@gmail.com", true);
console.log(user);
