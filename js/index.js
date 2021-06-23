const gameStartButton = document.querySelector("#start");
const inputForm = document.querySelector("#input-number-form");
const numberInput = document.querySelector("#input-number-form input");
const display = document.querySelector("#display");
const strikeDisplay = document.querySelector("#strike span:last-child");
const ballDisplay = document.querySelector("#ball span:last-child");
const limit = document.querySelector("#limit span:last-child");
const restartForm = document.querySelector("#restart-form");
const restartButton = document.querySelector("#restart");

limit.innerText = 10;

let randomNumber = "";
function makeNewNumber() {
    let numberBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (i = 0; i < 3; i++) {
        let selectIndex = Math.floor(Math.random() * numberBox.length)
        let selectNumber = numberBox[selectIndex];
        randomNumber += selectNumber;
        numberBox.splice(selectIndex, 1);
    }

    gameStartButton.classList.add("hidden");
    inputForm.classList.remove("hidden");
    display.classList.remove("hidden");
    restartButton.classList.remove("hidden");

    return randomNumber;
}

gameStartButton.addEventListener("click", makeNewNumber);

function checkNumber(submittedNumber) {
    if (submittedNumber.length !== 3) {
        alert("세자리수를 입력하세요!");
    }
}

function gamePlay(event) {
    event.preventDefault();
    let submittedNumber = numberInput.value;

    checkNumber(submittedNumber);

    let strike = 0;
    for (i = 0; i < randomNumber.length; i++) {
        if (submittedNumber[i] === randomNumber[i]) {
            strike += 1;
        }
    }
    strikeDisplay.innerText = strike;

    let ball = 0;
    for (i = 0; i < randomNumber.length; i++) {
        for (j = 0; j < randomNumber.length; j++) {
            if (submittedNumber[i] === randomNumber[j]) {
                ball += 1;
            }
        }
    }
    ball = ball - strike;
    ballDisplay.innerText = ball;

    numberInput.value = "";
    limit.innerText -= 1;
    if (limit.innerText == 0) {
        alert("you lose!");
    }
}

inputForm.addEventListener("submit", gamePlay);
