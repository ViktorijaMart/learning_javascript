class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (this.age < 20) {
      return `${this.name} is old enough to drink.`;
    } else {
      return `${this.name} is not old enough to drink.`;
    }
  }
}

const p1 = new Person("Petras", 16);
console.log(p1.compareAge());

// Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

let onlyNumbers = (array) => {
  return array.filter((elem) => typeof elem === "number");
};

console.log(onlyNumbers([1, 5, "a", "g", "z", 6]));

// Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

let doubleLetters = (string) => {
  return string
    .split("")
    .map((elem) => {
      if (+elem) {
        return elem;
      } else {
        return elem + elem;
      }
    })
    .join("");
};

console.log(doubleLetters("Petras 123 Slekys"));

// Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.

const isPostCode = (code) => {
  let codeArray = code.split("");
  let codeSorted = codeArray.sort();
  return codeSorted;
};

console.log(isPostCode("abc123"));
console.log(isPostCode("12345"));
console.log(isPostCode("123ab"));
