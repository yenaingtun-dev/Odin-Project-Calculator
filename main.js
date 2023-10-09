let firstNumber = '';
let opreator = '';
let secondNumber = '';
let result = '';
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // clear result
        if (result) {
            firstNumber = '';
            secondNumber = '';
            opreator = null;
            result = null;
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
    });
});
