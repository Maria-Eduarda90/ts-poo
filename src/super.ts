export class User {
    protected name: string;
    private email: string;
    private active: boolean = false;

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name;
        this.email = email;
        this.active = active;
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

    public getNumber(): number {
        return 123;
    }
}

class Manager extends User {
    constructor(name: string, email: string, active: boolean, code: string) {
        console.log(code);
        super(name, email, active);
    }
    public getName(): string {
        return `Doutor ${this.name}`;
    }

    public getNumber(): number {
        return super.getNumber() + 10;
    }
}

class Admin extends User {
    public getName(): string {
        return `Admin ${this.name}`;
    }

    public getNumber(): number {
        return 876;
    }
}
const code = String(Math.random());
const manager = new Manager("Carlos", "DoutorCarlos@gmail.com", true, code);
console.log(manager.getNumber());

const admin = new Admin("Carlos", "AdminCarlos@gmail.com", true);
console.log(admin.getName());
