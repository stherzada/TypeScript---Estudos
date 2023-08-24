let x;
if (typeof x === "undefined") x = "stherzada";
console.log(x + " world");

export function createPerson(
    firstName: string,
    lastName?: string
): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

export function squareOf(x: unknown) {
    if (typeof x === "number") return x * x;
    return null;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) {
    console.log("invalid data");
} else {
    console.log(squareOfTwoNumber * 100);
}
