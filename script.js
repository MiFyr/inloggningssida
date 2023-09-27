//user login input:
const username = document.getElementById("username");
const password = document.getElementById("password");
//correct username and password:
const nameKey = "Bella";
const passKey = "qwe123";
//get other html elements in DOM:
const logInButton = document.getElementById("login-btn");
const mainTag = document.querySelector("main");

logInButton.addEventListener("click", checkInput);

function checkInput() {
  if (username.value == nameKey && password.value == passKey) {
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
  localStorage.setItem("username", username.value); //maybe move these to checkInput function?
  localStorage.setItem("password", password.value);

  //Hide login form:
  let logInCard = document.getElementById("login-card");
  logInCard.style.display = "none";

  //Create "logged in" div:
  let welcomeDiv = document.createElement("div");
  let welcomeH2 = document.createElement("h2");
  let welcomeText = document.createTextNode("Välkommen! Du är inloggad.");
  let logOutBtn = document.createElement("button");
  logOutBtn.innerText = "Logga ut";
  welcomeH2.appendChild(welcomeText);
  welcomeDiv.appendChild(welcomeH2);
  welcomeDiv.appendChild(logOutBtn);
  mainTag.insertAdjacentElement("afterbegin", welcomeDiv);

  //Log out button function:
  logOutBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
}
