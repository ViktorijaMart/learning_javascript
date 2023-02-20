document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  if (+age < 18) {
    document.querySelector("h1").innerText = name + " will learn to drive";
  } else {
    document.querySelector("h1").innerText = name + " can drive";
  }
});
