type VotationOption = {
    numberOfvotes: number;
    option: string;
};

export class Votation {
    private _votationOptions: VotationOption[] = [];
    constructor(public details: string) {}

    addVotationOptions(votationOptions: VotationOption): void {
        this._votationOptions.push(votationOptions);
    }
    vote(votationIndex: number): void {
        if (!this._votationOptions[votationIndex]) return;
        this._votationOptions[votationIndex].numberOfvotes += 1;
    }
    get votationOptions(): VotationOption[] {
        return this._votationOptions;
    }
}

export class VotationApp {
    private votations: Votation[] = [];
    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }
    showVotations(): void {
        for (const votation of this.votations) {
            console.log(votation.details);
            for (const votationOption of votation.votationOptions) {
                console.log(
                    votationOption.option,
                    votationOption.numberOfvotes,
                );
            }
        }
    }
}

const votationUno = new Votation("What is your favorite programming language?");
votationUno.addVotationOptions({ option: "TypeScript", numberOfvotes: 0 });
votationUno.addVotationOptions({ option: "JavaScript", numberOfvotes: 0 });
votationUno.addVotationOptions({ option: "Python", numberOfvotes: 0 });

votationUno.vote(2);
votationUno.vote(1);
votationUno.vote(1);
votationUno.vote(1);
votationUno.vote(0);
votationUno.vote(0);
votationUno.vote(0);
votationUno.vote(0);
votationUno.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votationUno);

votationApp.showVotations();
