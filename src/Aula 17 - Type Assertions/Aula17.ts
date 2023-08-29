/* Recommend*/

// Condicional
const body = document.querySelector("body");
if (body) body.style.background = "red";

// type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
if (body3) body3.style.background = "red";

//HTMLBodyElement
const input = document.querySelector(".input") as HTMLInputElement;
input.value = "ROI";
input.focus();

/*Non Recommend*/

//non - nul assertions (!)
const body2 = document.querySelector("body")!; //esse objeto não pode ser nulo quando se coloca a !
body2.style.background = "red";
