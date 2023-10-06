// decorator são chamadas em determinadas partes do seu código
// @decorator

export class Animal {
    constructor(
        public name: string,
        public color: string,
    ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        color: string;
        name: string;

        constructor(...args: any[]) {
            super(...args);
            this.name = this.inverte(args[0]);
            this.color = this.inverte(args[1]);
        }
        inverte(value: string): string {
            return value.split("").reverse().join("");
        }
    };
}

const animal = new Animal("Yakki", "purple");
console.log(animal);
