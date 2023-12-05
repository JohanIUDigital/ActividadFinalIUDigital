const firstName = document.querySelector("#firstNameInput");
const lastName = document.querySelector("#lastNameInput");
const emailAdress = document.querySelector("#emailInput");
const password = document.querySelector("#passInput");

const firstNameError = Document.querySelector("#firstNameError");
const lastNameError = Document.querySelector("#lastNameError");
const emailAdressError = Document.querySelector("#emailError");
const passError = Document.querySelector("#passError");

const button = document.querySelector("#button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
});
