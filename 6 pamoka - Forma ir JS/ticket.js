document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const ticketPrice = 6;
  let age = +document.getElementById("your_age").value;
  if (age < 16) {
    document.querySelector("h1").innerText =
      "Ticket price: " + ticketPrice * 0.5;
  } else if (age > 60) {
    document.querySelector("h1").innerText = "Ticket price: " + ticketPrice / 3;
  } else {
    document.querySelector("h1").innerText = "Ticket price: " + ticketPrice;
  }
});
