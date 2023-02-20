// H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

const myName = document.querySelector("h1");

myName.addEventListener("click", () => {
  myName.style.height = "100vh";
  myName.style.display = "flex";
  myName.style.justifyContent = "center";
  myName.style.alignItems = "center";
  myName.style.fontSize = "100px";
  myName.style.color = "purple";
});
