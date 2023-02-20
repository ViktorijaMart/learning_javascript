// Suskaičiuok su JS koks bus cos(0) (t.y. cos, kai kampas 0 radians).
// Sukurk random skaičių tarp 1 ir 5 (įskaitant abu).
// Sukurk random skaičių tarp 5 ir 12 (įskaitant abu).
// Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).

// 1.
console.log(Math.cos(0));

// 2.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(1, 5));

// 3.
console.log(getRandomInt(5, 12));

// 4.

// function alertUser() {
//   if (getRandomInt(1, 5) === 1) {
//     return alert("Laimėjote, sveikiname!");
//   } else {
//     return alert("Šį kart nelaimėjote, žaiskite dar kartą");
//   }
// }

// alertUser();

// Susikurkite projektą, be jokių HTML tag'ų body. Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>.
// Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .
// Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".

// 1.

const myName = document.createElement("h1");
const node = document.createTextNode("Victoria");
myName.appendChild(node);

const element = document.querySelector("body");
element.appendChild(myName);

// 2.

const firstName = document.getElementById("name");
firstName.textContent = "Lhuna";

// 3.

const lastItem = document.querySelector("li:last-child");
lastItem.textContent = "Suris";

// 1. Ištaisykite klaidą. Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':

const changeColor = document.querySelector(".bluetext > span");
changeColor.textContent = "blue";

// Sukurkite ordered list su trimis list item duota eilės tvarka: "BMW group", "VW group" ir "GE". Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti). Pirma Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

const BMW = document.querySelector("ol > li:first-child");
const VW = document.querySelector("ol > li:nth-child(2)");

const BMWText = BMW.textContent;
const VWText = VW.textContent;

BMW.textContent = VWText;
VW.textContent = BMWText;
