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
let round = 1;


let playerChose = document.querySelectorAll(".button");

function computerChoice(){
    let rng = Math.floor(Math.random() * 3);
    return rng;
}
function playRound(humanChoice, computerChoice){
    // playround function will return a number based on the perspetive of the human
    // 0 = draw 
    // 1 = win 
    // 2 = lose
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

