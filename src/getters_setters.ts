export class Address {
    private _address: string = "";
    private _zipCode: string = "";

    public set address(address: string) {
        if (address.length < 3) {
            throw new Error("Invalid");
        }
        this._address = address;
    }

    public get address(): string {
        return this._address;
    }

    public set zipCode(zipCode: string) {
        this._zipCode = zipCode;
    }

    public get zipCode(): string {
        return this._zipCode.replace(/\D/g, "");
    }
}

const address = new Address();
address.address = "Marechal thaumaturgo";
console.log("Rua: ", address.address);

const zipCode = new Address();
zipCode.zipCode = "23446-344";
console.log("CEP: ", zipCode.zipCode);
