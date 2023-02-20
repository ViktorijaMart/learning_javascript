// Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const agreed = document.getElementById("agree").checked;
  console.log(agreed);
  if (agreed) {
    document.querySelector("h1").innerText = email + " subscribed";
  } else {
    document.querySelector("h1").innerText =
      "Not registered - you neet to agree to subscription";
  }
});
