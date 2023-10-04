export function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

// console.log(isNumber("123"));
// console.log(isNumber(123));

export function sum<T>(...args: T[]): number | null {
    const retorno = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);

    return retorno;
}

console.log(sum(1, 2, 3));
console.log(sum<number | string>(...[1, 2, 3, "a", "b", "c"]));
console.log(sum("a", "b", "c"));
