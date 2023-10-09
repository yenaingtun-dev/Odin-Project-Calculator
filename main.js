let firstNumber = '';
let opreator = '';
let secondNumber = '';
let result = '';
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e, button) );
});

window.addEventListener("keydown", (e) => {
    calculateKeyDown(e.key);
});

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

// calculate with keyboard
function calculateKeyDown(e) {
    if (isNumber(e)) {
        if (opreator) {
            secondNumber += e
        } else {
            if (result !== '') {
                firstNumber = result + firstNumber;
                result = '';
            }
            firstNumber += e;
        }
    } else if(e == '+' || e == '*' || e == '/' || e == '-') {
        if (firstNumber !== '0') {
            opreator = e;
        }
        if (firstNumber == '') {
            firstNumber = result + firstNumber;
            result = '';
        }
    } else if (e == '=' || e == 'Enter') {
        if (firstNumber !== null && opreator !== null && secondNumber !== null) {
            if (opreator == '+') {
                result = Number(firstNumber) + Number(secondNumber);
            } else if (opreator == '-') {
                result = Number(firstNumber) - Number(secondNumber);
            } else if (opreator == '*' || opreator == 'x') {
                result = Number(firstNumber) * Number(secondNumber);
            } else if (opreator == '/') {
                result = Number(firstNumber) / Number(secondNumber);
            } else {
                console.log('idk');
            }
        }
        firstNumber = '';
        secondNumber = '';
        opreator = '';
    } else {
        console.log('isnotanumber');
    }
    // console.log('first ' + firstNumber);
    // console.log('opreator ' + opreator);
    // console.log('second ' + secondNumber);
    // console.log('result ' + result);
    if (result) {
        document.getElementById('show').innerText = result;
    } else {
        document.getElementById('show').innerText = Number(firstNumber) + ' ' + opreator + ' ' + secondNumber;
    }
}

// calculate with button click
function calculate(e, button) {
        if (e.target.id === "number") {
            if (opreator) {
                if (firstNumber !== '') {
                    secondNumber += button.textContent
                } else {
                    firstNumber = result + firstNumber;
                    result = '';
                }
            } else {
                if (result !== '') {
                    firstNumber = result + firstNumber;
                    result = '';
                }
                firstNumber += button.textContent;
            }
        } else if (e.target.id === 'opreator') {
            if (firstNumber !== '0') {
                opreator = button.textContent;
            }
            if (firstNumber == '') {
                firstNumber = result + firstNumber;
                result = '';
            }
        } else if (e.target.id === 'calculate') {
            if (firstNumber !== null && opreator !== null && secondNumber !== null) {
                if (opreator == '+') {
                    result = Number(firstNumber) + Number(secondNumber);
                } else if (opreator == '-') {
                    result = Number(firstNumber) - Number(secondNumber);
                } else if (opreator == 'x') {
                    result = Number(firstNumber) * Number(secondNumber);
                } else if (opreator == '/') {
                    result = Number(firstNumber) / Number(secondNumber);
                } else {
                    console.log('idk');
                }
            }
            firstNumber = '';
            secondNumber = '';
            opreator = '';
        } else if (e.target.id === 'clear') {
            firstNumber = '';
            secondNumber = '';
            opreator = '';
            result = '';
        } else {
            console.log('idk');
        }
        if (result) {
            document.getElementById('show').innerText = result;
        } else {
            document.getElementById('show').innerText = Number(firstNumber) + ' ' + opreator + ' ' + secondNumber;
        }
        // console.log('first ' + firstNumber);
        // console.log('opreator ' + opreator);
        // console.log('second ' + secondNumber);
        // console.log('result ' + result);
}