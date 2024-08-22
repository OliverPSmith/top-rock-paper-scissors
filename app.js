

const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    let randomChoice = rockPaperScissors[random];
    return randomChoice;
}

const scoreBox = document.querySelector('#score-box');

const yourGuess = document.createElement('p');
const compGuess = document.createElement('p');
const roundResult = document.createElement('p');
const yourScore = document.createElement('p');
const compScore = document.createElement('p');

function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        scoreBox.appendChild(yourGuess);
        scoreBox.appendChild(compGuess);
        scoreBox.appendChild(roundResult);
        scoreBox.appendChild(yourScore);
        scoreBox.appendChild(compScore);
        if (humanChoice === computerChoice || humanChoice === null) {
            yourGuess.textContent = `Your Selection: ${humanChoice}`
            compGuess.textContent = `Your Selection: ${computerChoice}`
            roundResult.textContent = 'DRAW';
            yourScore.textContent = `Your Score: ${humanScore}`
            compScore.textContent = `Computer Score: ${computerScore}`
            console.log(
            `You: ${humanChoice}
            Computer: ${computerChoice}
            Result: DRAW
            Computer Score: ${computerScore}
            Your Score: ${humanScore}`);
        }   else if (humanChoice === rockPaperScissors[0] && computerChoice === rockPaperScissors[1] || 
                    humanChoice === rockPaperScissors[1] && computerChoice === rockPaperScissors[2] ||
                    humanChoice === rockPaperScissors[2] && computerChoice === rockPaperScissors[0]) {
                        computerScore++;
                        yourGuess.textContent = `Your Selection: ${humanChoice}`
                        compGuess.textContent = `Your Selection: ${computerChoice}`
                        roundResult.textContent = 'You Lose!';
                        yourScore.textContent = `Your Score: ${humanScore}`
                        compScore.textContent = `Computer Score: ${computerScore}`
                        console.log(
                            `You: ${humanChoice}
                            Computer: ${computerChoice}
                            \Result: You Lose!
                            Computer Score: ${computerScore}
                            Your Score: ${humanScore}`);
        }   else {
            humanScore++;
            yourGuess.textContent = `Your Selection: ${humanChoice}`
            compGuess.textContent = `Your Selection: ${computerChoice}`
            roundResult.textContent = 'You Win!';
            yourScore.textContent = `Your Score: ${humanScore}`
            compScore.textContent = `Computer Score: ${computerScore}`
            console.log(
                `You: ${humanChoice}
                Computer: ${computerChoice}
                Result: You Win!
                Computer Score: ${computerScore}
                Your Score: ${humanScore}`);
        }
    };


    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const humanSelection = button.id;
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        })
    })

}

playGame();






