export class Address {
    public static defaultValidation = 750000;

    public static isValid(code: string): boolean {
        return parseInt(code.replace(/\D/g, "")) > Address.defaultValidation;
    }
}

console.log(Address.isValid("7500-000"));
