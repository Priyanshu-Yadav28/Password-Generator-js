const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-PasswordDisplay]");

const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbol = `~!@#$%^&*()_-+={}[]:;'"<>,?/`;
// set strength circle to gray

// functions to create 
// handleSlider()
// copyContent()
// setIndicator()
// getRandomInteger()
// getRandomUpperCase()
// getRandomLowerCase()
// getRandomNumber()
// getRandomSymbol()
// calculateStrength()
// generatePassword()

let password = "";
let passwordLength = 15;
let checkCount = 1;

handleSlider();


// set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
};

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    // shadow hw
};

function getRndInteger(min, max) {
    Math.floor(Math.random() * (max - min)) + min;

};

function generateRandomNumber() {
    return  getRndInteger(0, 9);
};

function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
};

function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
};

function generateSymbol(symbol) {
    const randNum = getRndInteger(0, symbol.length);
    return symbol.charAt(randNum);
};

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8) {
        setIndicator("#0f0");
    } else if(
        (hasLower || hasUpper) && 
        (hasNum || hasSym) && 
        passwordLength >= 6
    ) {
        setIndicator("#ff0")
    } else {
        setIndicator("#f00")
    }
}


async function copyContent() {
    // to copy text on clipboard 
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    } 
    catch(e) {
        copyMsg.innerText = "Failed";
    }

    //to make copy wala span visible
    copyMsg.classList.add("active");

   setTimeout( () => {
    copyMsg.classList.remove("active");
   }, 2000)

}

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


// function generatePassword() {

// }











