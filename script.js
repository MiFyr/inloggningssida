//user login input:
const username = document.getElementById("username");
const password = document.getElementById("password");
//correct username and password:
const nameKey = "Bella";
const passKey = "qwe123";
//get other html elements in DOM:
const logInButton = document.getElementById("login-btn");
const mainTag = document.querySelector("main");

checkStorage();
logInButton.addEventListener("click", checkInput);

//---FUNCTION--- username/password check
function checkInput() {
  if (username.value == nameKey && password.value == passKey) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    logIn();
  } else {
    console.log("Fel uppgifter");
    let errorDiv = document.createElement("p");
    let errorText = document.createTextNode("Felaktiga inloggningsuppgifter");
    errorDiv.appendChild(errorText);

    mainTag.insertAdjacentElement("afterbegin", errorDiv);
  }
}

//---FUNCTION--- display login message
function logIn() {
  //hide login form:
  let logInCard = document.getElementById("login-card");
  logInCard.style.display = "none";

  //create "logged in" div:
  let welcomeDiv = document.createElement("div");
  let welcomeH2 = document.createElement("h2");
  let welcomeText = document.createTextNode("Välkommen! Du är inloggad.");
  let logOutBtn = document.createElement("button");
  logOutBtn.innerText = "Logga ut";
  welcomeH2.appendChild(welcomeText);
  welcomeDiv.appendChild(welcomeH2);
  welcomeDiv.appendChild(logOutBtn);
  mainTag.insertAdjacentElement("afterbegin", welcomeDiv);

  //log out button function:
  logOutBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
}

//---FUNCTION--- check if user is logged in
function checkStorage() {
  let storageName = localStorage.getItem("username");
  let storagePass = localStorage.getItem("password");
  if (storageName == nameKey && storagePass == passKey) {
    logIn();
  } else {
    return;
  }
}
