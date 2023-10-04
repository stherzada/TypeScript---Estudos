const object1: Record<string, string | number> = {
    name: "Sthe",
    lastname: "Silva",
    age: 32,
};

console.log(object1);

type PersonProtocol = {
    name?: string;
    lastname?: string;
    age?: number;
};

// Required = precisa ter
type PersonRequired = Required<PersonProtocol>;
// Partial = tudo se transforma em opcional
type PersonPartial = Partial<PersonRequired>;
//Readonly
type PersonReadonly = Readonly<PersonRequired>;
//Pick = Escolha
type PersonPick = Pick<PersonRequired, "name" | "lastname">;

const object2: PersonProtocol = {
    name: "Sthe",
    lastname: "Silva",
    age: 32,
};

console.log(object2);

//EXTRACT AND EXCLUDE
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";
//computa todos os tipos e exclui o repetido
type TypeExclude = Exclude<ABC, CDE>;

//computa e só mostra o que repete nos dois
type TypeExtract = Extract<ABC, CDE>;

//
export default 1;
