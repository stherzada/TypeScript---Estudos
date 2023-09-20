interface _Person {
    name: string;
}
interface _Person {
    lastname: string;
}
interface _Person {
    andress: readonly string[];
}
interface _Person {
    age: number;
}
const _person: _Person = {
    name: "Sther",
    lastname: "Alves",
    andress: ["AAAAAA"],
    age: 23,
};

_person.age = 32;
console.log(_person);
