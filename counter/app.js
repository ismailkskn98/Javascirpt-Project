//! Selectors
const number = document.getElementById('number');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

// value (değer)
let value = Number(number.textContent);

//! Events
eventListeners();
function eventListeners() {
    decrease.addEventListener('click', decreaseBtn); // sayıyı azaltma
    reset.addEventListener('click', resetBtn); // sayıyı sıfırlama (0)
    increase.addEventListener('click', increaseBtn); // sayıyı arttırma
}

//! function

// sayıyı azaltma
function decreaseBtn() {
    const newValue = value - 1;
    number.textContent = newValue;
    if (newValue < 0) {
        number.style.color = '#fc0000';
    }
    else if (newValue == 0) {
        number.style.color = '#132e48';
    }
    value = newValue;
}


// sayıyı sıfırlama (0)
function resetBtn() {
    number.textContent = 0;
    number.style.color = '#132e48';
    value = 0;
}

// sayıyı arttırma
function increaseBtn() {
    const newValue = value + 1;
    number.textContent = newValue;
    if (newValue > 0) {
        number.style.color = '#007d00';
    }
    else if (newValue == 0) {
        number.style.color = '#132e48';
    }

    value = newValue;
}