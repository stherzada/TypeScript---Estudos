//estrutura de dados não ordenada e você poder ordenar colocando vários tipos de coisas

enum Colors {
    Red = 16,
    Blue = 15,
    Yellow = 18,
    Purple = "Purple",
    Green = 304,
    Pink,
}

enum Colors {
    Black = "Black",
}

// console.log(Colors);

//quando escrevo o nome do campo ele me retorna o valor da posição de onde ele está
console.log(Colors.Blue);

//quando escrevo a posição, ele irá me retornar o valor do campo de onde ele está
console.log(Colors[15]);

// console.log(Colors.Purple);

export function choiceColors(color: Colors): void {
    console.log(Colors[color]);
}

choiceColors(Colors.Yellow);
