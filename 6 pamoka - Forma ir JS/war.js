document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let age = document.getElementById("age").value;
  let checked = document.getElementById("criminal").checked;
  if (age > 18 && age < 30 && checked !== true) {
    document.querySelector("h1").innerText = "You can go to war";
  } else {
    document.querySelector("h1").innerText = "You can't go to war";
  }
});
