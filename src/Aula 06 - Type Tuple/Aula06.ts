//Type tuple
// ? <- sempre que tiver um deste é opcional

const dataClient: [number, string] = [1, "Luiz"];
const dataClient2: [number, string, string] = [1, "Luiz", "Alves"];
const dataClient3: [number, string, string[]] = [
    1,
    "Sther",
    ["Alves", "Stherrr"],
];

console.log(dataClient3);
// console.log(dataClient);
// console.log(dataClient2);

dataClient2[2] = "Jessica";
dataClient[0] = 20;
dataClient[1] = "Stherzada";

// console.log(dataClient2);
// console.log(dataClient);

//readonly
// indica que a atribuição ao campo só pode ocorrer como parte da declaração ou em um construtor na mesma classe.
const arrayOne: readonly string[] = ["STHER", "ZADA"];
const arrayTwo: ReadonlyArray<string> = ["STHER", "ZADA"];

console.log(arrayOne, arrayTwo);
