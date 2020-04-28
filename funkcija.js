const inputField = document.querySelector('.inputField');
const submitButton = document.querySelector('.submitButton');
const resultP = document.querySelector('.resultParagraph');

function displayRounded(input, display) {
    n = input.value;
    nRound = Math.round(n);
    display.innerHTML = `Skaičiaus ${n} suapvalinta reikšmė yra: ${nRound}.`;
}

submitButton.addEventListener("click", function() {
    displayRounded(inputField, resultP);
})
