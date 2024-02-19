class Adress {
    constructor(
        public adress: string,
        public readonly zipCode: string,
        public number?: number
    ) {}
}

class User {
    name: string;
    email: string;
    adress: Adress[] = [];
    active?: boolean = true;

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }

    addAdress(newAdress: Adress): void {
        this.adress.push(newAdress);
    }

    getAdress(): Adress[] {
        return this.adress;
    }
}

const adress = new Adress("Rua x", "7576-9873", 129);
const user = new User("Maria", "Maria@gmail.com", true);
user.addAdress(adress);
console.log(user);
