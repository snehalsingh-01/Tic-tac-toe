let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turnO = true;
let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach( (box) => {
    box.addEventListener ("click",() =>{
        /*console.log('The box was clicked!');*/
        if (turnO === true){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        checkDraw();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const checkWinner = () => {
    for (let pattern of winningPatterns){
       /*console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);*/
        
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if (pos0Val != "" && pos1Val != "" && pos2Val != "" ){
            if (pos0Val === pos1Val && pos1Val === pos2Val){
                /*console.log("Winner");*/
                showWinner(pos0Val);
            }
        }
    };
};;

let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

const checkDraw = () => {
    let filled = 0;

    boxes.forEach((box) => {
        if (box.innerText !== "") {
            filled++;
        }
    });

    if (filled === 9) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
    }
};