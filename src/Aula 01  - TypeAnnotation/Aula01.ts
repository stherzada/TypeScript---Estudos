/*eslint-disable*/

// Type basic
let typeName: string = "Stherzada";
let typeNumber: number = 2525562;
let typeSymbol: symbol = Symbol("QUALQUERCOISA");

// Arrays

let arrayNumber: number[] = [5, 3, 2, 1, 5];
let arrayString: Array<string> = ["sther", "stherzada", "stherzinha"];

//Objects
//transforma em opcional
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
    nome: "Stherzada",
    idade: 22,
    adulto: true,
};

//functions

function sum(x: number, y: number) {
    return x + y;
}
const result = sum(4, 2);

// function sumTwo: (x: number, y:number) => number = (x, y) => x + y;
