type GetTheKey = <O, K extends keyof O>(object: O, key: K) => O[K];

const getTheKey: GetTheKey = (object, key) => object[key];

const stherzada = {
    name: "Sther",
    comida: ["Lasanha", "Gnnochi"],
};

const comidas = getTheKey(stherzada, "comida");
const names = getTheKey(stherzada, "name");

console.log(comidas, names);
