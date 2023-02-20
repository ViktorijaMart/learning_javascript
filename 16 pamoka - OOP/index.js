// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

function Car(brand, model, engine) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;

  this.turnOn = () => alert("vroooom");
}

const car1 = new Car("Bla", "BlaBla", "No");

car1.turnOn();

console.log(car1);

// Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

document.querySelector("p").textContent += "Bla";
