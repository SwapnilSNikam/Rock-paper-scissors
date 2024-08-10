let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else  {
        console.log("You lose!");
        compScore++;
        compScorePara.innerText =compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    // Generate computer commputer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // comp choice either scissor or paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // comp choice either rock or scissor
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // user choice is scissor
            // comp choice either rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
        
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
