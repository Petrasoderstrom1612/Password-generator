const characters = ["A","B","C","D","E","F","G","H","I"];
let password1El = document.getElementById ("password1-el")
let password2El = document.getElementById ("password2-el")
let password3El = document.getElementById ("password3-el")
let password4El = document.getElementById ("password4-el")
let passwordsEl = document.getElementById ("passwords-el")
let body = document.body;

function generatePasswords() {
    let randomPassword = "" 
        for (let i = 0 ; i < 6; i++){
            randomIndex = Math.floor(Math.random() * characters.length)
            randomPassword += characters[randomIndex]
        }
    return randomPassword
}

function assignPasswordsToButtons() {
password1El.innerHTML = generatePasswords()
password2El.innerHTML = generatePasswords()
password3El.innerHTML = generatePasswords()
password4El.innerHTML = generatePasswords()
passwordsEl.classList.add("passwords")
Array.from(passwordsEl.children).forEach(child => {
    child.classList.add("password");
});
}

function changeTheme() {
    body.classList.toggle("dark-theme");
}