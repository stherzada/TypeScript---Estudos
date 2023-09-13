//associação
export class Author {
    private _name: string;
    // é uma associação fraca esse tipo de coisa
    private _tools: Tools | null = null;

    constructor(name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    get tools(): Tools | null {
        return this._tools;
    }
    set tools(tools: Tools) {
        this._tools = tools;
    }

    write(): void {
        if (this.tools === null) {
            console.log("Não posso escrever sem a ferramenta");
            return;
        }
        this.tools.write();
    }
}

export abstract class Tools {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    abstract write(): void;
    get name(): string {
        return this._name;
    }
}

export class Pen extends Tools {
    write(): void {
        console.log(`${this.name} writing...`);
    }
}

export class TypeWriter extends Tools {
    write(): void {
        console.log(`${this.name} typing...`);
    }
}

const author = new Author("Sther");
const pen = new Pen("Bic");
const typeWriter = new TypeWriter("Phone");

// console.log(author.name);
// console.log(pen.name);
// console.log(typeWriter.name);

author.tools = typeWriter;
author.write();
