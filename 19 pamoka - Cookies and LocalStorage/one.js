// Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja - išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  document.cookie =
    `name=${name}; expires=` + new Date(9999, 0, 1).toUTCString();
  console.log(document.cookie);
});
