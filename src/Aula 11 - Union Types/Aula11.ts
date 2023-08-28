function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && b === "number") return a + b;
    return `${a}${b}`;
}

console.log(addOrConcat(10, 290));
console.log(addOrConcat("10", "290"));

console.log(addOrConcat(10, "290"));
console.log(addOrConcat("10", 290));
