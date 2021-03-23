const gameBoard = [""]; 

let playerX = [""];

let playerO = [""];

let generateBoard = function(){
    for (i=0; i < 9; i++ ){
      let newDiv = document.createElement("div");
      document.getElementById("gameBoard").appendChild(newDiv);
      newDiv.setAttribute("onclick", "clicker("+i+")");
      newDiv.setAttribute("class", "box");
      newDiv.setAttribute("id", i)
    }

}

let clicker = function(i) {
    let selectedBox = document.getElementById(i);
    selectedBox.innerHTML = "X";
}