// Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.

localStorage.setItem("name", "Viktorija");
localStorage.setItem("surname", "Mart");
localStorage.setItem("blabla", "Blablabla");
localStorage.setItem(
  "mephoto",
  "https://static.wikia.nocookie.net/despicableme/images/a/ac/BobYay.png/revision/latest/top-crop/width/360/height/450?cb=20220129132453"
);

console.log(localStorage.getItem("blabla"));
