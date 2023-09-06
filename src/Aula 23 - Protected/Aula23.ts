export class Enterprise {
    public readonly name: string;

    protected readonly cnpj: string;
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

    public getName(): string {
        return this.name;
    }
}

export class Twitch extends Enterprise {
    constructor() {
        super("Twitch", "00.000.000/0000-00");
    }
}

export class Collaborators {
    constructor(
        public readonly name: string,
        public readonly lastname: string
    ) {}
}

const enterprise1 = new Twitch();
const collaborators1 = new Collaborators("Sther", "zada");
enterprise1.addColaborator(collaborators1);
console.log(enterprise1.getName(), enterprise1.name);
console.log(enterprise1);
