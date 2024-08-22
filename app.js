

const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    let randomChoice = rockPaperScissors[random];
 //   console.log(randomChoice);
    return randomChoice;
}

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






