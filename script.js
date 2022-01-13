const generate = document.querySelector('.generate');

generate.addEventListener('click', generateRandomNumber);


function generateRandomNumber() {
    const fromNumber = document.querySelector('.fromNumber').value;
    const toNumber = document.querySelector('.toNumber').value;
    randomNumber = Math.floor(Math.random() * (parseInt(toNumber) - parseInt(fromNumber) + 1)) + parseInt(fromNumber);
    document.querySelector('.randomNum').innerHTML = randomNumber;
}