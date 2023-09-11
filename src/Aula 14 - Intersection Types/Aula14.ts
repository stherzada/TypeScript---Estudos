//intersection é menos utilizado

type HaveName = { name: string };
type HaveLastName = { lastname: string };
type HaveAge = { age: number };

// type Person = HaveName  HaveLastName | HaveAge;
//  nesse caso ele só precisa de um elemento dentro desse objeto para funcionar e não necessariamente de todos e

type Person = HaveName & HaveLastName & HaveAge;
//quando se coloca & é necessário ter TODOS os elementos dentro do objeto

// type AB = "A" | "B";
// type AC = "A" | "C";
// type Intercession = AB & AC;

const person: Person = {
    name: "Sther",
    lastname: "Zada",
    age: 22,
};

console.log(person);

//Module mode
export { person };



