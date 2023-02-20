// Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!".

function alertMe() {
  alert("Veikia");
}

function alertLater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("blabla");
      }
    }, 5000);
  });
}

alertLater()
  .then(alertMe)
  .catch((err) => console.log(err));

//   Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.
