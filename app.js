
const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    let randomChoice = rockPaperScissors[random];
    console.log(randomChoice);
    return randomChoice;
}
// getComputerChoice();



function getHumanChoice () {
    let promptStart = prompt('Rock, Paper, Scissors?');

    if (promptStart.toLowerCase() === 'rock') {
        console.log(rockPaperScissors[0]);
        return rockPaperScissors[0];
    }   else if (promptStart.toLowerCase()  === 'paper') {
        console.log(rockPaperScissors[1]);
        return rockPaperScissors[1];
    }   else if (promptStart.toLowerCase()  === 'scissors') {
        console.log(rockPaperScissors[2]);
        return rockPaperScissors[2];
    }   else {
        console.log('what?');
        return null;
    }
};
// getHumanChoice();


function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(
        `You: ${humanChoice}
        Computer: ${computerChoice}
        Result: DRAW`);
    }   else if (humanChoice === rockPaperScissors[0] && computerChoice === rockPaperScissors[1] || 
                humanChoice === rockPaperScissors[1] && computerChoice === rockPaperScissors[2] ||
                humanChoice === rockPaperScissors[2] && computerChoice === rockPaperScissors[0]) {
                    console.log(
                        `You: ${humanChoice}
                        Computer: ${computerChoice}
                        Result: You Lose!`);
    }   else {
        console.log(
            `You: ${humanChoice}
            Computer: ${computerChoice}
            Result: You Win!`);
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


