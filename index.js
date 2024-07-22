const characters = ["A","B","C","D","E","F","G","H","I"];
let password1El = document.getElementById ("password1-el")
let password2El = document.getElementById ("password2-el")
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
}

function changeTheme() {
    body.classList.toggle("dark-theme");
}