document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const number = +document.getElementById("number").value;
  let string = "";
  for (let i = 1; i <= number; i++) {
    const listItem = document.createElement("p");
    string += "*";
    listItem.innerText = string;
    document.querySelector("div").append(listItem);
  }
});
