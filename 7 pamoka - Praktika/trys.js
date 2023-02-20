// Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.
// °F = °C * 1.8 + 32.

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("h1").innerText =
    +document.getElementById("celcius").value * 1.8 + 32;
});
