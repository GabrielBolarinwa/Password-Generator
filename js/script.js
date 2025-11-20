let forms = document.getElementsByTagName("form");
const lowerCase = document.getElementById("lowerCase");
const lengthInput = document.getElementById("lengthText");
const upperCase = document.getElementById("upperCase");
const symbols = document.getElementById("symbols");
const number = document.getElementById("number");
const numberChars = "0123456789";
const symbolschars = "!@#$%^&*()_+-=";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const passwordResultContainer = document.querySelector(
  ".passwordResultContainer",
);
const copyIcon = document.querySelector(".copy-icon");
let passwordResult = document.getElementById("passwordResult");

function generatePassword(event) {
  event.preventDefault();
  event.stopPropagation();
  let allowedChars;
  let password = "";
  let lengthText = lengthInput.value;
  lengthText = Number(lengthText);

  if (number.checked) {
    allowedChars = numberChars;
  }
  if (upperCase.checked) {
    allowedChars += uppercaseChars;
  }

  if (symbols.checked) {
    allowedChars += symbolschars;
  }
  if (lowerCase.checked) {
    allowedChars += lowercaseChars;
  }

  for (let r = 0; r < lengthText; r++) {
    password += allowedChars.charAt(
      Math.floor(Math.random() * allowedChars.length),
    );
  }
  passwordResult.textContent = password;
  passwordResultContainer.style.display = "flex";
  changeIcon();
}

async function copyPassword() {
  try {
    await navigator.clipboard.writeText(passwordResult.textContent);
  } catch (e) {
    window.alert("Failed to Copy Text, Please check your clipboard settings");
  }
  copyIcon.classList.replace("fa-copy", "fa-clipboard-check");
}

function changeIcon() {
  copyIcon.classList.replace("fa-clipboard-check", "fa-copy");
}
