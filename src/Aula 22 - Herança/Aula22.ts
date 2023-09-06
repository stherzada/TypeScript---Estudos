export abstract class Person {
    public readonly name: string;
    public readonly lastname: string;
    private readonly age: number;
    protected readonly cpf: string;

    constructor(name: string, lastname: string, age: number, cpf: string) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.cpf = cpf;
    }

    getAge(): number {
        return this.age;
    }
    getCpf(): string {
        return this.cpf;
    }
    getName(): string {
        return `${this.name} ${this.lastname}`;
    }
}

export class Student extends Person {
    getName(): string {
        console.log("testando algo");
        const result = super.getName();
        return result + "   Heeeeeyyyyyy";
    }
}
export class Client extends Person {
    getName(): string {
        return `This come from the client ${this.name} ${this.lastname}`;
    }
}

//polimorfismo é sobreescrever os métodos tendo assim formas diferentes de objetos
const student = new Student("Sther", "Zada", 60, "000.000.000-00");
const client = new Client("Sther", "Zada", 60, "000.000.000-00");
// const person = new Person("Sther", "Zada", 60, "000.000.000-00");

console.log(student.getName());
console.log(client.getName());

// console.log(person);
// não depender de classes concretas, why????? pesquisar
