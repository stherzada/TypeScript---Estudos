type Age = number;
type Person = {
    name: string;
    age: Age;
    salary: number;
    favoriteColor?: string;
};

type ColorRGB = "Red" | "Green" | "Blue";
type ColorCMYK = "Cyan" | "Magenta" | "Yellow" | "Black";
type favoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
    age: 22,
    name: "Sther",
    salary: 20000,
};

export function setFavoriteColor(person: Person, color: favoriteColor): Person {
    return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, "Magenta"));
console.log(person);
