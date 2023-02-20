// Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. Po forma sukurkite lentelę joje atvaizduokite informaciją iš localStorage.

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = document.getElementById("full-name").value.split(" ");

  let people = [];

  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  }

  const person1 = new Person(fullName[0], fullName[1]);
  people.push(person1);
  localStorage.setItem("array", JSON.stringify(people));
});
