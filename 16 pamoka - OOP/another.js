// Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = document.getElementById("fullname").value;

  const fullNameArray = fullName.split(" ");

  const name =
    fullNameArray[0].charAt(0).toUpperCase() +
    fullNameArray[0].slice(1).toLowerCase();

  const surname =
    fullNameArray[1].charAt(0).toUpperCase() +
    fullNameArray[1].slice(1).toLowerCase();

  function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.addName = function () {
      document.getElementById("name").textContent += this.name;
      document.getElementById("surname").textContent += this.surname;
    };
  }

  const per1 = new Person(name, surname);

  console.log(per1);
  per1.addName();
});
