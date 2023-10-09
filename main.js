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

function calculateKeyDown(e) {
    if (isNumber(e)) {
        if (opreator) {
            secondNumber += e;
        } else {
            firstNumber += e;
        }
    } else if(e == '+' || e == '*' || e == '/' || e == '-') {
        opreator = e
    } else if (e == '=' || e == 'Enter') {
        if (firstNumber !== null && opreator !== null && secondNumber !== null) {
            if (opreator == '+') {
                result = Number(firstNumber) + Number(secondNumber);
            } else if (opreator == '-') {
                result = Number(firstNumber) - Number(secondNumber);
            } else if (opreator == '*') {
                result = Number(firstNumber) * Number(secondNumber);
            } else if (opreator == '/') {
                result = Number(firstNumber) / Number(secondNumber);
            } else {
                console.log('idk');
            }
        }
    } else {
        console.log('isnotanumber');
    }
    console.log('first ' + firstNumber);
    console.log('opreator ' + opreator);
    console.log('second ' + secondNumber);
    console.log('result ' + result);
}

function calculate(e, button) {
        // clear result
        if (result) {
            firstNumber = '';
            secondNumber = '';
        }
        if (e.target.id === "number") {
            // check if number
            if (opreator) {
                // assign second number
                secondNumber += button.textContent
            } else {
                // assign first number
                firstNumber += button.textContent;
            }
        } else if (e.target.id === 'opreator') {
            // assign opreator
            if (result !== '') {
                firstNumber = result;
                result = '';
            }
            opreator = button.textContent;
        } else if (e.target.id === 'calculate') {
            // check nothing is null and calculate by it opreator
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
        } else {
            firstNumber = '';
            secondNumber = '';
            opreator = '';
            result = '';
        }
        if (result) {
            document.getElementById('show').innerText = result;
        } else {
            document.getElementById('show').innerText = firstNumber + ' ' + opreator + ' ' + secondNumber;
        }
        console.log('first ' + firstNumber);
        console.log('opreator ' + opreator);
        console.log('second ' + secondNumber);
        console.log('result ' + result);
}