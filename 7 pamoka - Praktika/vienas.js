// Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let time = +document.getElementById("time").value;
  let bonus = 50;
  if (time > 20) {
    bonus += 150;
  } else if (time > 10) {
    bonus = bonus + 50;
  }
  document.querySelector("h1").innerText = "Your bonus: " + bonus;
});
