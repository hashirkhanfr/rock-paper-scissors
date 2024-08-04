function getRandomNumer(){
    return (Math.floor(Math.random() * 3));  // Writing 3 as the max number will return either 0,1 or 2.
    // Math.floor will round down the float result to the nearest lower integer
} 

function getComputerChoice(){
    return (getRandomNumer());    // returns the random number between 0 - 2 from getRandomNumber().
}

function getUserChoice(){
    let stringChoice = prompt("Rock,Paper or Scissors?");  // holds the user choice in a string form.
    let finalChoice;                                       // to hold the integer value for user's choice to later compare with computer's choice
    switch(stringChoice.toLowerCase()){                    // converting string to lowercase to handle exceptions, and then switching it.
        case "rock":        finalChoice = 0; break;        // 0 = Rock
        case "paper":       finalChoice = 1; break;        // 1 = Paper
        case "scissors":    finalChoice = 2; break;        // 2 = Scissors
    }
    return (finalChoice);
}

function compareChoices(myChoice,botChoice){
    if ((myChoice === 0 && botChoice === 2) || (myChoice === 1 && botChoice === 0) || (myChoice === 2 && botChoice === 1))
        return ('W');   // For my winning conditions, it's a W
    else if ((myChoice === 0 && botChoice === 1) || (myChoice === 1 && botChoice === 2) || (myChoice === 2 && botChoice === 0))
        return ('L');   // For my losing conditions, it's an L
    else
        return ('T');   // It will be a tie if no one wins or loses
}

function playRound(humanChoice, computerChoice){
    
}

const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();