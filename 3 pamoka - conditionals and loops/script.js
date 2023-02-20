// Parašykite variable su jūsų vardu. Pasiklauskite, jei vardo ilgis trumpesnis nei 5 simboliai - tegul išmeta konsolėje "Short Name", kitaip - "Long Name".
// Sukurkite du kintamuosius: 'clientAge' ir 'legalAge'. Patikriname ar vartotojas gali vairuoti automobilį - t.y. clientAge didesnis arba lygus legalAge. Jei taip - išmeta 'Can Drive', kitaip 'Can't drive'.
// Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.
// Sukurkite variable 'phone', kuris būtų lygus 'iPhone'. Taip pat sukurkite variable isIphoneUser, kuris turėtų būti prilygintas Boolean reikšmei (t.y. true arba false) priklausomai ar phone yra 'iPhone' ar bet koks kitas.

// 1.

let vardas = "Victoria";

let nameLength = vardas.length < 6 ? "Short name" : "Long name";

console.log(nameLength);

// 2.

const clientAge = 118;
const legalAge = 18;

const license = clientAge >= legalAge ? "Can drive" : "Can't drive";
console.log(license);

// 3.

const validLicense =
  clientAge < 0 || clientAge > 120
    ? "Invalid age"
    : clientAge >= legalAge
    ? "Can drive"
    : "Can't drive";
console.log(validLicense);

// Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą (atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo skaičiuką dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje).
// Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.
// Prie savo vardo atspaudink ir 'i' raidę, t.y. kelintas ciklas yra (pvz.: "0. Petras", "1. Petras", "2. Petras")...
// Parašyk for loopą, kuris atspaudins nuo 10 iki 1 countdown konsolėje.

// 1.

for (i = 0; i < 10; ++i) {
  console.log("Victoria");
}

// 2.

const myName = "Victoria";
const repeat = 10;

for (i = 0; i < repeat; ++i) {
  console.log(myName);
}

// 3.

for (i = 0; i < repeat; ++i) {
  console.log(i + `. ${myName}`);
}

// 4.

for (i = 10; i > 0; --i) {
  console.log(i);
}
