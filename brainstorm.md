# Brainstorming for Rock Paper Scissors

## Functions
   - **getComputerChoice** - to get the computer choice and return a random guess out of RPS
   - **getHumanChoice** - to prompt and get a valid choice from user
   - **playRound** - this uses human choice and computer choice returned from the functions and then logs the winner.
                     Also increments either userScore or computerScore upon winning
   - **playGame** - to call playRound() 5 times to play the game

## Variables
   - **humanScore and computerScore** : Initialized to 0, will track the scores of player and computer
   - **humanSelection** : stores the returned value from getHumanChoice()
   - **computerSelection** : stores the returned value from getComputerChoice()



# Simple Pseudocode
- OBTAIN User's choice
- GENERATE random choice for Computer
- COMPARE choices
- CHECK conditions for the choices to decide who won
- INCREMENT the winner's score
- IF game has not been played for 5 rounds yet <br>
    Play another round