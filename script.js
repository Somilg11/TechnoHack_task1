let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}


var favFood = "grapes";
var favThought = function(){
    console.log("Original favouirte food is " + favFood);
    var favFood ="sushi";
    console.log("new fav food "+ favFood)
}

favThought();