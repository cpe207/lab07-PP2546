const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const sucmitBtn = document.querySelector("#submit-btn");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");


firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

sucmitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let emailOk = false;
  let passwordOk = false;

  if(firstNameInput.value === ""){
    firstNameInput.classList.add("is-invalid");
  }else{
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if(lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
  }else{
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if(emailInput.value === ""){
    emailInput.classList.add("is-invalid");
  }else if(validateEmail(emailInput.value) == false){
    emailInput.classList.add("is-invalid");
  }else{
    emailInput.classList.add("is-valid");
    emailOk = true;
  }

  if(passwordInput.value === "" || passwordInput.value < 6){
    passwordInput.classList.add("is-invalid");
  }else{
    passwordInput.classList.add("is-valid");
    passwordOk = true;
  }

  if(isFirstNameOk && isLastNameOk && emailOk && passwordOk) {
    alert("Registered successfully");
  }
};

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}