export class Enterprise {
    public readonly name: string;
    protected readonly cnpj: string;
    protected readonly collaborators: Collaborators[] = [];

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

export class Twitch extends Enterprise {
    constructor() {
        super("Twitch", "00.000.000/0000-00");
    }

    popCollaborators(): Collaborators | null {
        const collaborators = this.collaborators.pop();
        if (collaborators) return collaborators;
        return null;
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
const collaborators2 = new Collaborators("Luiz", "Otavio");
const collaborators3 = new Collaborators("Sther", "zada");
enterprise1.addColaborator(collaborators1);
enterprise1.addColaborator(collaborators2);
enterprise1.addColaborator(collaborators3);
console.log(enterprise1.name);
console.log(enterprise1);

const removeCollaborator = enterprise1.popCollaborators();
console.log(removeCollaborator);
console.log(enterprise1);
