export function multipleArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((value) => value.toUpperCase());
}
const result = multipleArgs(1, 2, 3);
const concat = concatString("a", "b", "c");
const upper = toUpperCase("a", "b", "c");
console.log(result);
console.log(concat);
console.log(upper);
