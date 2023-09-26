const passwordInput = document.querySelector("#password");
const hiddenInput = document.querySelector("#hidden");
const eyeIcon = document.querySelector("i");

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