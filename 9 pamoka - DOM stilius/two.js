// Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

const button = document.querySelector("button");
button.style.cssText = "top:5px; left:5px";

// document.querySelector("body").style.position = "relative";
let corner = 0;
let style = [
  "position:absolute; top:5x; left:5px",
  "position:absolute; bottom:5px; left:5px",
  "position:absolute; bottom:5px; right:5px",
  "position:absolute; top:5px; right:5px",
];

button.addEventListener("click", () => {
  if (corner < style.length) {
    corner++;
    button.style.cssText = style[corner];
  } else {
    corner = 0;
  }
});
