const characters = ["A","B","C","D","E","F","G","H","I"];
let password1El = document.getElementById ("password1-el")
let password2El = document.getElementById ("password2-el")

function generatePasswords() {
    let randomPassword1 = ""
    let randomPassword2 = "" 
        for (let i = 0 ; i < 6; i++){
            randomIndex1 = Math.floor(Math.random() * characters.length)
            randomIndex2 = Math.floor(Math.random() * characters.length)
            randomPassword1 += characters[randomIndex1]
            randomPassword2 += characters[randomIndex2]
        }
    console.log("randomPassword1", randomPassword1)
    password1El.innerHTML = randomPassword1
    password2El.innerHTML = randomPassword2
}