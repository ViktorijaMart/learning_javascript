// Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
// L
// L
// L
// L L L L

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const number = +document.getElementById("number").value;
  let string = "";
  for (let i = 0; i < number; i++) {
    const listItem = document.createElement("p");
    if (i !== number - 1) {
      string = "L";
      listItem.innerText = string;
      string = "";
    } else {
      for (let y = 0; y < number; ++y) {
        string += "L ";
      }
      listItem.innerText = string;
    }
    document.querySelector("div").append(listItem);
  }
});
