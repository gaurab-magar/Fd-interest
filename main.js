const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+={}[]|\':;?/.,`<>";

let inputValue = document.querySelector('#pass');
let lengthEl = document.querySelector('#length');
let lowerEl = document.querySelector('#lower');
let upperEl = document.querySelector('#upper');
let numberEl = document.querySelector("#number");
let symbol = document.querySelector('#symbol');
let generateBtn = document.querySelector('#btn');


generateBtn.addEventListener('click',()=>{
    let length = parseInt(lengthEl.value);
    let characters = "";
    let password = "";

    if(lowerEl.checked){
        characters += lowercaseLetters;
    }
    if(upperEl.checked){
        characters+= uppercaseLetters;
    }
    if(numberEl.checked){
        characters+= numbers;
    }
    if(symbol.checked){
        characters+= symbols;
    }
    for (let i=0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    inputValue.value = password;
})