function nameAndClass(param1: string, param2: string) {
    //closure
    return function <T extends new (...args: any[]) => any>(target: T): T {
        console.log("i am your fatherrrr (lied)", target);
        return class extends target {
            cor: string;
            nome: string;

            constructor(...args: any[]) {
                super(...args);
                this.nome = this.inverte(args[0]);
                this.cor = this.inverte(args[1]);
            }

            inverte(valor: string): string {
                return (
                    valor.split("").reverse().join("") +
                    "" +
                    param1 +
                    "" +
                    param2
                );
            }
        };
    };
}

@nameAndClass("value 1", "value2")
export class Animal {
    constructor(
        public nome: string,
        public cor: string,
    ) {
        console.log("i am a big class muhahahahaha");
    }
}

const animal = new Animal("Luiz", "roxo");
console.log(animal);
