type ColorObj = typeof colorObj;
type ColorKey = keyof ColorObj;

const colorObj = {
    vermelho: "red",
    verde: "green",
    azul: "blue",
    roxo: "purple",
};

function translateColor(color: ColorKey, colors: typeof colorObj) {
    return colors[color];
}

console.log(translateColor("vermelho", colorObj));
console.log(translateColor("verde", colorObj));
