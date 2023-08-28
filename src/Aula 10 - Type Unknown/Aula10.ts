//unknown é um type mais seguro que o any e seria o pai para todos os outros tipos
let x: unknown;

x = 100;
x = "Luiz";
x = 900;
x = true;
x = 10;
const y = 100;

if (typeof x === "number") console.log(x * y);

// a diferença entre o any e unknown é a checagem de type, que é necessária antes de atribuir um valor
