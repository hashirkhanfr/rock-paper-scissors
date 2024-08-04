# Brainstorming for Rock Paper Scissors

## Functions
   - **getComputerChoice** - to get the computer choice and return a random guess out of RPS
   - **getHumanChoice** - to prompt and get a valid choice from user
   - **playRound** - this uses human choice and computer choice returned from the functions and then logs the winner.
                     Also increments either userScore or computerScore upon winning

## Variables
   - **humanScore and computerScore** : Initialized to 0, will track the scores of player and computer
   - **humanSelection** : stores the returned value from getHumanChoice()
   - **computerSelection** : stores the returned value from getComputerChoice()
   -