let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const startGame = () =>{
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    playBtn.addEventListener('click', ()=>{
                introScreen.classList.add("fadeOut");
                match.classList.add("fadeIn");
    });
}

startGame();



function getComputerChoice(){
    const choice = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() *3);
    return choice[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer){
        userScore++
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        const smallUserWord = "user".fontsize(3).sub();
        const smallCompWord = "comp".fontsize(3).sub();
        result_div.innerHTML = convertToWord(user)+(smallUserWord) + " beats " + convertToWord(computer)+(smallCompWord) + ". YOU WIN!👍"
        
    
}

function lose(user, computer){
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(user)+(smallUserWord) + " loses to " + convertToWord(computer)+(smallCompWord) + ". YOU Lost!😢"
    

    
}

setTimeout(function(){result_div.innerHTML = "Show us what you got!";}, 5000);


function draw(user, computer){

    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(user)+(smallUserWord) + " equals to " + convertToWord(computer)+(smallCompWord) + ". It is a draw!🥱"
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);

    }
}



function main(){
    rock_div.addEventListener("click", function(){
        game("r");
    })
    
    paper_div.addEventListener("click", function(){
        game("p");
    })
    
    scissors_div.addEventListener("click", function(){
        game("s");
    })

}

main();