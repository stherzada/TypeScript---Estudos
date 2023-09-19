type TypePerson = {
    name: string;
    lastname: string;
    fullName: () => string;
};

interface TypeTest {
    name: string;
    lastname: string;
    fullName: () => string;
}

//não tem uma herança ocorrendo por aqui
class Person implements TypePerson {
    public name: string;
    public lastname: string;

    constructor(name: string, lastname: string) {
        this.name = name;
        this.lastname = lastname;
    }

    fullName(): string {
        return this.name + " " + this.lastname;
    }
}

const person = new Person("Sther", "Alves");
console.log(person.fullName());
