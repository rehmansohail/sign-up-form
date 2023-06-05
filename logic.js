var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords do not match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  button.classList.add('button-animation');
  setTimeout(function() {
    button.classList.remove('button-animation');
  }, 500);
});