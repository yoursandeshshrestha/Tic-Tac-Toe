let boxes = document.querySelectorAll(".box");
let mainContainer = document.querySelector(".main-container");
let winnerMain = document.querySelector(".winner-main");
let resetBtn = document.querySelector(".reset-btn");
let textContainer = document.querySelector(".text-container")

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let turnNice = true; // Player Switch

boxes.forEach( (box) => {
    box.addEventListener("click", function(){
        if(turnNice){
            box.innerText = "😀";
            turnNice = false;
        }else{
            box.innerText = "👿";
            turnNice = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    textContainer.innerText = `Congratulations, Player ${winner} is the winner`;
    resetBtn.innerText = "Play Again"
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                toggle();
                disabledBoxes();
            }
        }
    }
}


let toggle = function(){
    mainContainer.style.display = "none";
    winnerMain.style.display = "flex";
    enableBoxes();
}

function PlayGame(){
    turnNice = true;
    enableBoxes();
    mainContainer.style.display = "flex";
    winnerMain.style.display = "none";
}


resetBtn.addEventListener("click", PlayGame)