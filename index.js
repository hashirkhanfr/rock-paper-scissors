function getRandomNumer(){
    return (Math.floor(Math.random() * 3));  //Writing 3 as the max number will return either 0,1 or 2.
    //Math.floor will round down the float result to the nearest lower integer
} 

function getComputerChoice(){
    return (getRandomNumer());
}

function getUserChoice(){
    let stringChoice = prompt("Rock,Paper or Scissors?");
    let finalChoice;
    switch(stringChoice.toLowerCase()){
        case "rock":        finalChoice = 0; break;
        case "paper":       finalChoice = 1; break;
        case "scissors":    finalChoice = 2; break;
    }
}
