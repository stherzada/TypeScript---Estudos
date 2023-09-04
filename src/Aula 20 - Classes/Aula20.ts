// forma longa
export class Enterprise {
    public readonly name: string; // public é opcional
    protected readonly cnpj: string;
    //atributo da classe que é readonly e não o array
    private readonly collaborators: Collaborators[] = [];

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    public addColaborator(collaborators: Collaborators): void {
        this.collaborators.push(collaborators);
    }

    public displayColaborator(): void {
        for (const collaborators of this.collaborators) {
            console.log(collaborators);
        }
    }
}

// forma curta
export class Collaborators {
    constructor(
        //funciona tanto valor qnt tipo
        public readonly name: string,
        public readonly lastname: string
    ) {}
}

const enterprise1 = new Enterprise("Twitch", "11.111.111/0001-11");
const collaborators1 = new Collaborators("Sther", "Zada");
const collaborators2 = new Collaborators("Luiz", "Bana");
const collaborators3 = new Collaborators("Maria", "Souza");

enterprise1.addColaborator(collaborators1);
enterprise1.addColaborator(collaborators2);
enterprise1.addColaborator(collaborators3);

//Se  um objeto tem as chaves de outro objeto não kliga
enterprise1.addColaborator({
    name: "Random",
    lastname: "AAAA",
});

// enterprise1.name = "Facebook";
// não vai deixar até atribuir pq já foi adicionado um valor e ele está com a propiedade de só ler

console.log(enterprise1);
console.log(enterprise1.name);

enterprise1.displayColaborator();
