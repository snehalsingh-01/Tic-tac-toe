let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turnO = true;
let winingPatterns = [
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
        console.log('The box was clicked!');
        if (turnO === true){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
    });
});