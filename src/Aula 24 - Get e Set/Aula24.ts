export class Person {
    public name: string;
    public lastname: string;
    private _age: number;
    protected _cpf: string;
    constructor(name: string, lastname: string, age: number, cpf: string) {
        this.name = name;
        this.lastname = lastname;
        this._age = age;
        this._cpf = cpf;
    }

    public get age(): number {
        return this._age;
    }

    public set cpf(value: string) {
        this._cpf = value;
    }
    public get cpf(): string {
        return this._cpf.replace(/\D/g, "");
    }

    getName(): string {
        return `${this.name} ${this.lastname}`;
    }
}

const person = new Person("Sther", "Zada", 60, "560.000.000-00");
console.log(person.age);

person.cpf = "123.535.534-11";
console.log(person.cpf);
