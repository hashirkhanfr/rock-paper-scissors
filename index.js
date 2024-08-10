function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);  
    document.querySelector(".rock-box.b-choice").style.backgroundColor = "unset";
    document.querySelector(".paper-box.b-choice").style.backgroundColor = "unset";
    document.querySelector(".scissors-box.b-choice").style.backgroundColor = "unset";
    switch (choice){
        case 0:
            document.querySelector(".rock-box.b-choice").style.backgroundColor = "red";
            break;
        case 1:
            document.querySelector(".paper-box.b-choice").style.backgroundColor = "red";
            break;
        case 2:
            document.querySelector(".scissors-box.b-choice").style.backgroundColor = "red";
            break;
    }
    return choice;
} 

function playRound(myChoice,botChoice){    
        if ((myChoice === 0 && botChoice === 2) || (myChoice === 1 && botChoice === 0) || (myChoice === 2 && botChoice === 1))
        {
            roundResult.innerHTML = `<span style="color: rgb(0, 173, 216);">Player</span> wins the round`;
            displayResult('W');
        }
        else if ((myChoice === 0 && botChoice === 1) || (myChoice === 1 && botChoice === 2) || (myChoice === 2 && botChoice === 0))
        {
            roundResult.innerHTML = `<span style="color: red;">Computer</span> wins the round`;
            displayResult('L');   
        }

        else
        {
            roundResult.innerHTML= "It is a Tie!!!";
            displayResult('T'); 
        }
             
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
let roundResult = document.querySelector(".round-results");
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
