export default interface Person {
    name: string;
}
export default interface Person {
    lastname: string;
}
export default interface Person {
    andress: readonly string[];
}
export default interface Person {
    age: number;
}
const person: Person = {
    name: "Sther",
    lastname: "Alves",
    andress: ["AAAAAA"],
    age: 23,
};

person.age = 32;
console.log(person);
