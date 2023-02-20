// Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".

function minToSec(number) {
  return number * 60;
}

console.log(minToSec(3));

// Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

function daysLived(years) {
  return years * 365;
}

console.log(daysLived(20));

// Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25

const sqr = (number) => number * number;

console.log(sqr(5));

// Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50

const triangeArea = (height, width) => (height * width) / 2;

console.log(triangeArea(10, 10));

// Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".

const lastLetter = (string) => string[string.length - 1];

console.log(lastLetter("Victoria"));

// Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"

const stringReversed = (string) =>
  string.toLowerCase().split("").reverse().join("");

console.log(stringReversed("Victoria"));

// Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const minVal = (array) => {
  const negArray = array.filter((elem) => elem < 0);
  return Math.max(...negArray);
};

console.log(minVal([-1, -100, -5, 10, 0, 11]));

// Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

const randomArray = (numbers) => {
  let array = [];
  for (let i = 0; i < numbers; ++i) {
    let random = Math.floor(Math.random() * 10) + 1;
    array.push(random);
  }
  return array;
};

console.log(randomArray(3));

// Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true

const moreThanHundred = (num1, num2) => num1 + num2 >= 100;

console.log(moreThanHundred(50, 60));

// Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

const sortedArray = (array) =>
  array
    .sort((a, b) => (a.name < b.name ? -1 : 1))
    .sort((a, b) => a.age - b.age);

console.log(
  sortedArray([
    { name: "Alfreda", age: 25 },
    { name: "Jonas", age: 25 },
    { name: "Kasparas", age: 20 },
  ])
);

// Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
// Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const missing = (array) => {
  array.sort((a, b) => a - b);
  for (i = 0; i < array.length; ++i) {
    if (array[i + 1] - array[i] !== 1) {
      return array[i] + 1;
    }
  }
};

console.log(missing([1, 4, 2, 5]));
