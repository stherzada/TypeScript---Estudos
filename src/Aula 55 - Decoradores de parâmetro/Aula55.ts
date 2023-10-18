function decorator(
    classPrototype: any,
    propertyKey: string | symbol | undefined,
    index: number,
): void {
    console.log(index);
    console.log(classPrototype);
    console.log(propertyKey);
}

export class OnePeople {
    name: string;
    lastname: string;
    age: number;
    constructor(
        @decorator name: string,
        @decorator lastname: string,
        age: number,
    ) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    /// decoradores nos parametros
    classMethod(@decorator msg: string): string {
        return `${this.name} ${this.lastname}: ${msg} `;
    }

    get nameAndLastName(): string {
        return this.name + " " + this.lastname;
    }

    set nameComplete(value: string) {
        const words = value.split(/\s+/g);
        const firstName = words.shift();
        if (!firstName) return;
        this.name = firstName;
        this.lastname = words.join("");
    }
}

const people = new OnePeople("Sther", "Sther", 43);

const ClassMethod = people.classMethod("HRU?");

console.log(ClassMethod);
