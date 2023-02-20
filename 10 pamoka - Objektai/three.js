// Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean.

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const person = {};
  person.name = document.getElementById("name").value;
  person.isLegalAge = +document.getElementById("age").value >= 18;
  console.log(person);
});
