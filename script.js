let userScore = 0
let compScore = 0;

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
const button = document.querySelector('#button')
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const index = Math.floor(Math.random() * 3)
    return options[index]
}

const drawGame = () => {

    msg.innerText = "Game is Draw . Play again."
    msg.style.background = '#4c7bb1'
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = 'green'
    } else {
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.background = 'red'
    }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice()
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

button.addEventListener('click', () => {
    userScore = 0
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = 'Play your move'
    msg.style.background = '#4c7bb1'
})