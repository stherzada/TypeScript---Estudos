export class Person {
    static agePattern = 0;
    static cpfPattern = "000.000.000-00";
    public name: string;
    public lastname: string;
    public _age: number;
    private _cpf: string;
    constructor(name: string, lastname: string, age: number, cpf: string) {
        this.name = name;
        this.lastname = lastname;
        this._age = age;
        this._cpf = cpf;
    }

    //chamando o método pela instancia
    methodNormal(): void {
        console.log(Person.agePattern, Person.cpfPattern);
    }

    static createPerson(name: string, lastname: string): Person {
        return new Person(name, lastname, Person.agePattern, Person.cpfPattern);
    }
}

const person1 = new Person("Sther", "Zada", 60, "560.000.000-00");
const person2 = Person.createPerson("Lucas", "Souza");
console.log(person1);
console.log(person2);

person1.methodNormal();
console.log(Person.agePattern, Person.cpfPattern);
