let initialPrice = document.querySelector('#initial-price');
let quantity = document.querySelector('#quantity');
let currentPrice = document.querySelector('#current-price');
let submitBtn = document.querySelector('.submit-btn');
let output = document.querySelector('.output');

function validInputs(initPrice, quantity, currPrice) {
    if(initPrice && quantity && currPrice && initPrice > -1 && quantity > -1 && currPrice > -1) return true;
    return false;
}

function calculateStock(initPrice, quantity, currPrice) {
    if(validInputs(initPrice, quantity, currPrice)) {
        if(initPrice !== currPrice) {
            let change = Math.abs(initPrice - currPrice) * quantity;
            let percentageChange = parseFloat((change * 100) / initPrice).toFixed(2);
            if(initPrice < currPrice) return `WOHO! You have a profit of ${change} and percentage is ${percentageChange}%`
            return `Uhm! You have a loss of ${change} and percentage is ${percentageChange}%`
        } else return "No profit-No gain"
    }
    return "Please enter valid Inputs!"
}

function displayOutput(message) {
    output.innerText = message;
}

function getProfitOrLoss() {
    let initPrice = Number(initialPrice.value);
    let quant = Number(quantity.value);
    let currPrice = Number(currentPrice.value);

    let message = calculateStock(initPrice, quant, currPrice);

    displayOutput(message);
}

//Event listeners

submitBtn.addEventListener('click', getProfitOrLoss);