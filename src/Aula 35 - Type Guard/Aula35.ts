export function add(a: unknown, b: unknown) {
    return typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`;
}

console.log(add(2, 4));
console.log(add("a", "b"));

type Person = {
    tipo: "person";
    name: string;
};

type Animal = { tipo: "animal"; color: string };

type PersonOrAnimal = Person | Animal;

class Student implements Person {
    tipo: "person" = "person";
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function displayName(obj: PersonOrAnimal): void {
    // if ("name" in obj) console.log(obj.name);
    // //refinação de tipos
    // if (obj instanceof Student) console.log(obj.name);
    switch (obj.tipo) {
        case "person":
            console.log(obj.name);
            return;
        case "animal":
            console.log("this is a animal", obj.color);
            return;
    }
}

displayName(new Student("Sther"));
displayName({ tipo: "animal", color: "Pink" });
