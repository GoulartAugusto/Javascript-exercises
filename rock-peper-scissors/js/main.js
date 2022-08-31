// Rock, paper or scissors - Refactured with Functions

const initGame = () => {
    const startGame = confirm("Shall we play rock, paper or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
};

// Game Flow function

const playGame = () => {
    while (true) {
        let playerChoise = getPlayerChoise();
        playerChoise = formatPlayerChoise(playerChoise);
        if (!playerChoise === "") {
            invalidChoise();
            continue;
        }
        if (!playerChoise) {
            decidedNotToPlay();
            break;
        }
        playerChoise = evaluatePlayerChoise(playerChoise);
        if (!playerChoise) {
            invalidChoise();
            continue;
        }
        const computerChoise = getComputerChoise();
        const result = determineWinner(playerChoise, computerChoise);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoise = () => {
    return prompt("Please enter rock, paper or scissors.");
};

const formatPlayerChoise = (playerChoise) => {
    if (playerChoise || playerChoise === "") {
        return playerChoise.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guess you chaged your mind. Maybe next time.");
};

const evaluatePlayerChoise = (playerChoise) => {
    if (
        playerChoise === "rock" ||
        playerChoise === "paper" ||
        playerChoise === "scissors"
    ) {
        return playerChoise;
    } else {
        return false;
    }
};

const invalidChoise = () => {
    alert("You didn't enter rock, paper or scissors.")
};

const getComputerChoise = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner = 
    player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;

    return winner;
};

const displayResult = (result) => {
    alert(result)
};

const askToPlayAgain = () => {
    return confirm("Play Again?");
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};

initGame();