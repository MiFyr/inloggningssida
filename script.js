const username = document.getElementById("username");
const password = document.getElementById("password");
const logInButton = document.getElementById("login-btn");
const mainTag = document.querySelector("main");

logInButton.addEventListener("click", checkInput);

function checkInput() {
  if (username.value == "Bella" && password.value == "qwe123") {
    logIn();
  } else {
    console.log("Fel uppgifter");
    let errorDiv = document.createElement("p");
    let errorText = document.createTextNode("Felaktiga inloggningsuppgifter");
    errorDiv.appendChild(errorText);

    mainTag.insertAdjacentElement("afterbegin", errorDiv);
  }
}

function logIn() {
  let logInCard = document.getElementById("login-card");
  logInCard.style.display = "none";
}
