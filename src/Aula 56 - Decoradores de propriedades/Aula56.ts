function decorator(
    classPrototype: any,
    propertyKey: string | symbol | undefined,
): any {
    let valueProperty: any;
    return {
        get: () => valueProperty,
        set: (value: any) => {
            if (typeof value === "string") {
                valueProperty = value.split("").reverse().join("");
                return;
            }
            valueProperty = value;
        },
    };
}

export class OnePeople {
    @decorator
    name: string;
    lastname: string;
    age: number;
    constructor(name: string, lastname: string, age: number) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    /// decoradores nos parametros
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
