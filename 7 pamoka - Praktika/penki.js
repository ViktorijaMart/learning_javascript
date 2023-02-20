// Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  const number = +document.getElementById("number").value;
  for (let i = 0; i < number; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = name;
    document.querySelector("ul").append(listItem);
  }
});
