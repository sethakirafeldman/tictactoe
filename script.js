const gameBoard = [""]; 

let playerX = [""];

let playerO = [""];

let generateBoard = function(){
    for (i=0; i < 8; i++ ){
       let gameDiv =  getElementById("gameBoard");
       div = document.createElement("div");
        document.gameDiv.appendChild(div);
    }

}

let clicker = function(i) {
    let selectedBox = document.getElementById(i);
    selectedBox.innerHTML = "X";
}