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
}
