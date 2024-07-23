const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let password1El = document.getElementById ("password1-el")
let password2El = document.getElementById ("password2-el")
let password3El = document.getElementById ("password3-el")
let password4El = document.getElementById ("password4-el")
let passwordsEl = document.getElementById ("passwords-el")
let numberSelectEl = document.getElementById("number-select-el");
let body = document.body;
let includeSpecialCharacters = true
let maxLoop = 8
let arrayLength = characters.length

function changeTheme() {
    body.classList.toggle("dark-theme");
}

for (let i = 6; i <= 20; i++) { // This forloop needs to be outside of function to show the options when page renders, not needing to click first
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    if (i === 8) { //default number of characters displaied on render
        option.selected = true;
    }
    numberSelectEl.appendChild(option);
}

function selectNumberOfCharacters(){
    maxLoop = parseInt(numberSelectEl.value, 10); //10 to have full numbers
}

function changeSpecialCharacters(){
    includeSpecialCharacters = !includeSpecialCharacters
    arrayLength = includeSpecialCharacters ? characters.length : 16; //the length of the array where special characters start
}

function generatePasswords() {
    let randomPassword = "" 
        for (let i = 0 ; i < maxLoop; i++){
            randomIndex = Math.floor(Math.random() * arrayLength)
            randomPassword += characters[randomIndex]
        }
    return randomPassword
}

function assignPasswordsToButtons() {
    password1El.textContent = generatePasswords()
    password2El.textContent = generatePasswords()
    password3El.textContent = generatePasswords()
    password4El.textContent = generatePasswords()
    passwordsEl.classList.add("passwords")
    Array.from(passwordsEl.children).forEach(child => {
        child.classList.add("password"); //so that the background for passwords does not show prior to them being generated
    });
}

function copyPassword(elementId) { //copy paste on click
    const textToCopy = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(textToCopy)
}