
var palavra = "#password_123!";
var vetor1 = palavra.match(/[a-z]/g); // e,n,h
var vetor2 = palavra.match(/[A-Z]/g); // S,A
var vetor3 = palavra.match(/[0-9]/g); // 1,2,3
var vetor4 = palavra.match(/\W|_/g); // #,_,!
var vetor5 = palavra.match(/[T-Z]/g); // null

const form = document.querySelector(".form");
const passwordInput = document.querySelector("#password");
const hiddenInput = document.querySelector("#hidden");
const eyeIcon = document.querySelector("i");
const printAnswer = document.querySelector(".answer");
const button = document.querySelector(".submit");

function hiddenPassword() {
  if(hiddenInput.checked) {
    passwordInput.type = "text";
    eyeIcon.attributes[0].value = `fa-solid fa-eye-slash`;
  } else {
    passwordInput.type = "password";
    eyeIcon.attributes[0].value = `fa-solid fa-eye`;
  }
}

hiddenInput.onclick = hiddenPassword;

function passwordVerify() {
  const password = passwordInput.value;
  let errors = [];
  if (password.length < 8 || password.length > 15) {
    errors.push("possuir entre 8 e 15 caracteres");
  }

  if (!password.match(/[0-9]/g) == null) {
    errors.push("possuir números (no mínimo 1)");
  }

  if (!password.match(/[a-z]/g)) {
  errors.push("possuir letras minúsculas (no mínimo 1)");
  }

  if (!password.match(/[A-Z]/g) || password.match(/[A-Z]/g).length == 1) {
    errors.push("possuir letras maiúsculas (no mínimo 2)");
  }

  if (!password.match(/[\W|_]/g)) {
    errors.push("possuir símbolos (no mínimo 1)");
  }

  if (errors.length == 0) {
    printAnswer.textContent = "Ok! senha Válida"
  } else {
    printAnswer.textContent = "Erro... A senha deve " + errors.join(", ");
  }
}

form.onsubmit = e => e.preventDefault();
button.onclick = passwordVerify;