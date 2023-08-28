let x = 10; //eslint-disable-line
x = 239090320932;
const y = 10;

let a = 100 as const;

const person = {
    name: "Sther" as const,
    lastName: "Zada",
};

function choiceColors(color: "Red" | "Yellow" | "Blue") {
    return color;
}
console.log(choiceColors("Yellow"));

//Module mode
export default 1;
