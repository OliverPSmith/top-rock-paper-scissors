

const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    let randomChoice = rockPaperScissors[random];
    console.log(randomChoice);
    return randomChoice;
}


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



function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice || humanChoice === null) {
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
                        console.log(
                            `You: ${humanChoice}
                            Computer: ${computerChoice}
                            \Result: You Lose!
                            Computer Score: ${computerScore}
                            Your Score: ${humanScore}`);
        }   else {
            humanScore++;
            console.log(
                `You: ${humanChoice}
                Computer: ${computerChoice}
                Result: You Win!
                Computer Score: ${computerScore}
                Your Score: ${humanScore}`);
        }
    };

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    

    // const humanSelection2 = getHumanChoice();
    // const computerSelection2 = getComputerChoice();
    // playRound(humanSelection2, computerSelection2);

    // const humanSelection3 = getHumanChoice();
    // const computerSelection3 = getComputerChoice();
    // playRound(humanSelection3, computerSelection3);

    // const humanSelection4 = getHumanChoice();
    // const computerSelection4 = getComputerChoice();
    // playRound(humanSelection4, computerSelection4);

    // const humanSelection5 = getHumanChoice();
    // const computerSelection5 = getComputerChoice();
    // playRound(humanSelection5, computerSelection5);
}

playGame();






