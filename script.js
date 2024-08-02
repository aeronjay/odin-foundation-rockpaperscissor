/*PSEUDOCODE
    REPEAT 5X
        ASK FOR HUMANCHOICE
        GET COMPUTERCHOICE
        COMPARE HUMAN & COMPUTERCHOICE
        SHOW RESULT
        UPDATE SCORE
    
    SHOW WINNER
*/

const choices = ["rock", "paper", "scissors", "scissor"];

function playGame(){
    let humanScore = 0, computerScore = 0;

    let round = 1;
    do{
        console.log(`Round ${round}:`)
        
        let computer = computerChoice();
        let human = humanChoice();
        let outcome = playRound(human,computer);
        if(outcome === 1){
            ++humanScore;
        }else if(outcome === 2){
            ++computerScore;
        }
        console.log(`HUMAN: ${humanScore}\nCOMPUTER: ${computerScore}`)
        ++round;
        console.log("\n\n")
    }while(round <= 5);
    console.log("FINAL SCORE");
    console.log(`HUMAN: ${humanScore}\nCOMPUTER: ${computerScore}`);
}

let computerChoice = () => {
    let rng = Math.floor(Math.random() * 3);
    return rng;
};

let humanChoice = () => {
    let humanPrompt = null;
    let humanChoice = null;
    do{
        humanPrompt = prompt("ROCK PAPER SCISSOR ROUND: N/A \n\n What Is Your Choice Human?").toLowerCase();
    }while(humanPrompt === "" || !(choices.includes(humanPrompt)));
    
    switch(humanPrompt){
        case "rock":
            humanChoice = 0;
            break;
        case "paper":
            humanChoice = 1;
            break;
        case "scissor":
        case "scissors":
            humanChoice = 2;
            break;
    }

    return humanChoice;
};

function playRound(humanChoice, computerChoice){
    // playround function will return a number based on the perspetive of the human
    // 0 = draw 1 = win 2 = lose
    if(humanChoice === computerChoice){
        //draw
        console.log(`Game is a draw both players chose: ${choices[humanChoice]}`);
        return 0;
    }else{
        if(humanChoice - computerChoice > 0){
            if(!(Math.abs(humanChoice - computerChoice) === 2)){
                //win
                console.log(`Human Player Wins! ${choices[humanChoice]} beats ${choices[computerChoice]}`);
                return 1;
            }else{
                //lose
                console.log(`Human Player Lose! ${choices[humanChoice]} lose against  ${choices[computerChoice]}`);
                return 2;
            }
        }else{
            if(Math.abs(humanChoice - computerChoice) === 2){
                //win
                console.log(`Human Player Wins! ${choices[humanChoice]} beats ${choices[computerChoice]}`);
                return 1;
            }else{
                //lose
                console.log(`Human Player Lose! ${choices[humanChoice]} lose against  ${choices[computerChoice]}`);
                return 2;
            }
        }
    }
}


playGame();