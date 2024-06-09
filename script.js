let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector(".btnClear");
    let equal = document.querySelector(".btnEqual");
    let number = document.querySelectorAll(".number");
    let operator = document.querySelectorAll(".operators");
    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    number.forEach((number) => number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operator.forEach((op) => op.addEventListener("click", function(e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentScreen;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function() {
        calculate()
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    })
})

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === '*') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}
