/*PSEUDOCODE
    REPEAT 5X
        ASK FOR HUMANCHOICE
        GET COMPUTERCHOICE
        COMPARE HUMAN & COMPUTERCHOICE
        SHOW RESULT
        UPDATE SCORE
    
    SHOW WINNER
*/

const choices = ["Rock", "Paper", "Scissors", "scissor"];
const weapons = ["✊","✋","✌️"];
let round = 0;
let playerLives = ["❤️", "❤️", "❤️", "❤️", "❤️"];
let computerLives = ["❤️", "❤️", "❤️", "❤️", "❤️"];

let playerWeapon = document.querySelectorAll(".button");
let playerWeaponInfo = document.querySelector(".player-weapon");
let computerWeaponInfo = document.querySelector(".computer-weapon");
let winAnnounce = document.querySelector(".winner-text");
let gameRound = document.querySelector("#round-number");

let playerLife = document.querySelector(".player-life");
let computerLife = document.querySelector(".computer-life");
let endText = document.querySelector(".endText");


function computerChoice(){
    let rng = Math.floor(Math.random() * 3);
    return rng;
}

playerWeapon.forEach(weapon => {
    weapon.addEventListener("click", e => {
        // 0 = rock
        // 1 = paper
        // 2 = scissor
        if(playerLives.length !== 0 && computerLives.length !== 0){
            let humanChoice = parseInt(e.target.id);
            let computer = computerChoice();
            
            playerWeaponInfo.textContent = weapons[humanChoice];
            computerWeaponInfo.textContent = weapons[computer];

            let outcome = playRound(humanChoice,computer);
            
            updateLife(outcome);

            ++round;
            gameRound.textContent = round;

            
            if(playerLives.length === 0){
                //player lose
                endText.textContent = "You Lose!";
                endText.style.color = "red";
            }else if(computerLives.length === 0){
                endText.textContent = "You Win!";
                endText.style.color = "green";
            }
        }
    });
});

function updateLife(outcome){
    if(outcome === 0){
        return;
    }else if(outcome === 1){
        computerLives.pop();
        computerLife.textContent = "(" + computerLives.length + ") " + computerLives.join(" ");
    }else{
        // outcome === 2
        playerLives.pop();
        playerLife.textContent = "(" + playerLives.length + ") " + playerLives.join(" ");
        
    }
}

function playRound(humanChoice, computerChoice){
    // playround function will return a number based on the perspetive of the human
    // 0 = draw 
    // 1 = win 
    // 2 = lose
    if(humanChoice === computerChoice){
        //draw
        winAnnounce.textContent = (`Game is a DRAW both players chose: ${choices[humanChoice]}`);
        winAnnounce.style.color = "grey";

        return 0;
    }else{
        if(humanChoice - computerChoice > 0){
            if(!(Math.abs(humanChoice - computerChoice) === 2)){
                //win
                winAnnounce.textContent = (`Human Player WINS! ${choices[humanChoice]} beats ${choices[computerChoice]}`);
                winAnnounce.style.color = "green";
                return 1;
            }else{
                //lose
                winAnnounce.textContent = (`Human Player LOSE! ${choices[humanChoice]} lose against  ${choices[computerChoice]}`);
                winAnnounce.style.color = "red";
                return 2;
            }
        }else{
            if(Math.abs(humanChoice - computerChoice) === 2){
                //win
                winAnnounce.textContent = (`Human Player WINS! ${choices[humanChoice]} beats ${choices[computerChoice]}`);
                winAnnounce.style.color = "green";
                return 1;
            }else{
                //lose
                winAnnounce.textContent = (`Human Player LOSE! ${choices[humanChoice]} lose against  ${choices[computerChoice]}`);
                winAnnounce.style.color = "red";
                return 2;
            }
        }
    }
}

