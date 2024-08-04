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
    let printArray = ["Rock","Paper","Scissors"];          //To avoid writing the exact terms in console.log again and again
    if ((myChoice === 0 && botChoice === 2) || (myChoice === 1 && botChoice === 0) || (myChoice === 2 && botChoice === 1))
    {
        console.log("You Win! " + printArray[myChoice] + " beats " + printArray[botChoice]);
        return ('W');   // For my winning conditions, it's a W
    }
        
    else if ((myChoice === 0 && botChoice === 1) || (myChoice === 1 && botChoice === 2) || (myChoice === 2 && botChoice === 0))
    {
        console.log("You Lose! " + printArray[botChoice] + " beats " + printArray[myChoice]);
        return ('L');   // For my losing conditions, it's an L
    }
    else
    {
        console.log("It's a Tie! " + printArray[botChoice] + " ties with " + printArray[myChoice]);
        return ('T');   // It will be a tie if no one wins or loses
    }
        
}

function playRound(humanChoice, computerChoice,humanScore,computerScore){
    let roundResult = compareChoices(humanChoice,computerChoice);  // will output the result and return the result character 
    switch (roundResult){
        case 'W':                                                  // for the case of user winning
            humanScore++;
            break;
        case 'L':                                                  // for the case of computer winning
            computerScore++;
            break;
    }
}

function playGame(maxGames){
    for (let i = 1; i <= maxGames; i++){
        console.log("------GAME " + i + "------");
        const humanSelection = getUserChoice();        //Calls function which prompts user for input and returns the respective integer 0,1 or 2
        const computerSelection = getComputerChoice(); //Calls function which generates random number between 0 - 2
        playRound(humanSelection,computerSelection,humanScore,computerScore);     // playing the main round
    }
    alert(`Player's Score: ${humanScore}` + `\nComputer's Score: ${computerScore}`);   // alerts with the final result of the game

}

let humanScore = 0                             // For storing user's score after each round
   ,computerScore = 0;                         // For storing computer's score after each round

playGame(5);                                   //plays the game for 5 rounds