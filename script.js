const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generatePassword() {
  let length = document.getElementById("length-range").value;
  let password = "";

  for(let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    console.log(randomIndex);
    password += characters[randomIndex];
  }

  document.getElementById("password-output").value = password;
}

document.getElementById("generate-button").addEventListener("click", generatePassword);
const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
  const password = document.getElementById('password-output').value;
  
  // Copy to clipboard
  navigator.clipboard.writeText(password);
})