type Vehicle = {
    brand: string;
    year: number;
};

type Car = {
    brand_: Vehicle["brand"];
    year_: Vehicle["year"];
    name: string;
};

const car: Car = {
    brand_: "Ford",
    year_: 2077,
    name: "Cyberpunk",
};

console.log(car);
