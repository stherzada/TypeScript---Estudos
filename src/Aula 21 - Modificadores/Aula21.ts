export class Enterprise {
    //
    public readonly name: string;

    protected readonly cnpj: string;
    private readonly collaborators: Collaborators[] = [];
    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    //disponibilizada métodos que poderan alterar essa classe
    public addColaborator(collaborators: Collaborators): void {
        this.collaborators.push(collaborators);
    }
    public displayColaborator(): void {
        for (const collaborators of this.collaborators) {
            console.log(collaborators);
        }
    }

    public getName(): string {
        return this.name;
    }
}

export class Collaborators {
    constructor(
        public readonly name: string,
        public readonly lastname: string
    ) {}
}

const enterprise1 = new Enterprise("Twitch", "11.111.111/0001-11");
console.log(enterprise1.getName(), enterprise1.name);
