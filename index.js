function getComputerChoice(){
    document.querySelector(".rock-box.b-choice").style.backgroundColor = "unset";
    document.querySelector(".paper-box.b-choice").style.backgroundColor = "unset";
    document.querySelector(".scissors-box.b-choice").style.backgroundColor = "unset";
    let choice = Math.floor(Math.random() * 3);  
    switch (choice){
        case 0:
            document.querySelector(".rock-box.b-choice").style.backgroundColor = "rgb(0, 150, 219)";
            break;
        case 1:
            document.querySelector(".paper-box.b-choice").style.backgroundColor = "rgb(0, 150, 219)";
            break;
        case 2:
            document.querySelector(".scissors-box.b-choice").style.backgroundColor = "rgb(0, 150, 219)";
            break;
    }
    return choice;
} 

function playRound(myChoice,botChoice){
    let printArray = ["Rock","Paper","Scissors"];         
    if ((myChoice === 0 && botChoice === 2) || (myChoice === 1 && botChoice === 0) || (myChoice === 2 && botChoice === 1))
        displayResult('W');  
        
    else if ((myChoice === 0 && botChoice === 1) || (myChoice === 1 && botChoice === 2) || (myChoice === 2 && botChoice === 0))
        displayResult('L');   
    else
        displayResult('T');   
}

function displayResult(charac){
    if (charac === 'W'){
        playerLabel.textContent = ++humanScore;
    }
    else if (charac === 'L'){
        botLabel.textContent = ++computerScore;
    }
}

let playerLabel = document.querySelector(".player-results");
let botLabel = document.querySelector(".bot-results");

let humanScore = 0                            
   ,computerScore = 0;                        

document.querySelector(".rock-box").addEventListener("click",function(){
    playRound(0,getComputerChoice())
});
document.querySelector(".paper-box").addEventListener("click",function(){
    playRound(1,getComputerChoice())
})
document.querySelector(".scissors-box").addEventListener("click",function(){
    playRound(2,getComputerChoice())
})                             


