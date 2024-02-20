export class User {
    protected name: string;
    private email: string;
    private adress: Adress[] = [];
    private active: boolean = false;

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
    }

    public addAdress(newAdress: Adress): void {
        this.adress.push(newAdress);
    }

    public changeName(newName: string): void {
        if (newName.length < 3) {
            throw new Error("invalid name");
        }
        this.name = newName;
    }

    public getName(): string {
        return this.name;
    }
}

class Manager extends User {
    public getName(): string {
        return `Doutor ${this.name}`;
    }
}

class Admin extends User {
    public getName(): string {
        return `Admin ${this.name}`;
    }
}

const user = new User("carlos", "usuariocomun@gmail.com", true);

const manager = new Manager("Carlos", "DoutorCarlos@gmail.com", true);
console.log(manager.getName());

const admin = new Admin("Carlos", "AdminCarlos@gmail.com", true);
console.log(admin.getName());
