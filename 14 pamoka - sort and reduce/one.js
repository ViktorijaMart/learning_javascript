// Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

let friends = ["Marta", "Zaika", "Mumis", "Lokis"];

const friendsSorted = friends.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});

console.log(friendsSorted);

// Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

const friendsSortedBack = friends.sort((a, b) => {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});

console.log(friendsSortedBack);

// Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

const arraySorted = [5, 10, 20, 11, 12, 1, 0, 14, 25].sort((a, b) => a - b);

console.log(arraySorted);

// Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).

const newArr = [10, 5, 20, 4].sort((a, b) => a - b);

console.log(newArr[newArr.length - 1]);

// Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

let numbers = [5, 15, 84, 31, 2, 18];

let sum = numbers.reduce((acc, val) => acc + val);

console.log(sum);

// Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

const threeCars = cars.reduce((acc, val) => {
  if (val.length === 3) {
    acc++;
  }
  return acc;
}, 0);

console.log(threeCars);

// Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.

let max = numbers.reduce((acc, val) => {
  if (val > acc) {
    acc = val;
  }
  return acc;
});

console.log(max);

/////////////////////

const people = [
  {
    name: "Petras",
    age: 18,
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

//   Prafiltruojame masyvą, kad rodytų tik pilnamečius.

const adults = people.filter((elem) => elem.age >= 18);

console.log(adults);

// 2. Pakoreguojame aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Tai rezultatas turi būti: ["Petras", "Antanas", "Diana"].

const adultsName = adults.map((elem) => elem.name);

console.log(adultsName);

// 3. Antro pratimo array A-Z tvarka išrykiuokite. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

console.log(adultsName.sort((a, b) => (a < b ? -1 : 1)));
