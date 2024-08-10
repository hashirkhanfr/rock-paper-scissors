function getRandomNumer(){
    return (Math.floor(Math.random() * 3));  
} 

function getComputerChoice(){
    return (getRandomNumer());    // returns the random number between 0 - 2 from getRandomNumber().
}

function getUserChoice(count){
    // let stringChoice = prompt(`--------Round ${count}--------\nRock,Paper or Scissors?`); 
    let finalChoice;                                       
    switch(stringChoice.toLowerCase()){                    
        case "rock":        finalChoice = 0; break;        
        case "paper":       finalChoice = 1; break;       
        case "scissors":    finalChoice = 2; break;      
    }
    return (finalChoice);
}

function playRound(myChoice,botChoice){
    let printArray = ["Rock","Paper","Scissors"];         
    if ((myChoice === 0 && botChoice === 2) || (myChoice === 1 && botChoice === 0) || (myChoice === 2 && botChoice === 1))
    {
        // console.log("You Win! " + printArray[myChoice] + " beats " + printArray[botChoice]);
        return ('W');  
    }
        
    else if ((myChoice === 0 && botChoice === 1) || (myChoice === 1 && botChoice === 2) || (myChoice === 2 && botChoice === 0))
    {
        // console.log("You Lose! " + printArray[botChoice] + " beats " + printArray[myChoice]);
        return ('L');   
    }
    else
    {
        // console.log("It's a Tie! " + printArray[botChoice] + " ties with " + printArray[myChoice]);
        return ('T'); 
    }
        
}

function playGame(maxGames){
    for (let i = 1; i <= maxGames; i++){
        // console.log("------ROUND " + i + "------");
        const humanSelection = getUserChoice(i);       
        const computerSelection = getComputerChoice(); 
        switch(playRound(humanSelection,computerSelection)){      
            case 'W' : humanScore++    ; break;
            case 'L' : computerScore++ ; break;
        }     
    }
    // alert(`Player's Score: ${humanScore}` + `\nComputer's Score: ${computerScore}`);  

}

let humanScore = 0                            
   ,computerScore = 0;                        

playGame(5);                             