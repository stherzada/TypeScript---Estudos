function semRetorno(...args: string[]): void {
    console.log(args.join(" "));
}

// void é está em uma função quando não é para retornar nada.
//um exemplo pr ase usar void é que mudar o status de um botão

const people = {
    name: "Sther",
    age: 18,

    displayName(): void {
        console.log(this.name + "" + this.age);
    },
};

export { people };

people.displayName();

semRetorno("Sther", "Zada");
