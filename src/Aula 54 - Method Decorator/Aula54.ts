function decorator(
    classPrototype: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
    console.log(descriptor);
    console.log(propertyKey);
    console.log(classPrototype);
    return {
        value: function (...args: any[]) {
            return args[0].toUpperCase();
        },
    };
}
export class OnePeople {
    name: string;
    lastname: string;
    age: number;
    constructor(name: string, lastname: string, age: number) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    @decorator
    classMethod(msg: string): string {
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
