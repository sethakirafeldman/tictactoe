const gameBoard = [""]; 

let playerX = [""];

let playerO = [""];

const generateBoard = () => {
    for (i=0; i < 9; i++ ){
      let newDiv = document.createElement("div");
      document.getElementById("gameBoard").appendChild(newDiv);
      newDiv.setAttribute("onclick", "clicker("+i+")");
      newDiv.setAttribute("class", "box");
      newDiv.setAttribute("id", i);
    }

}

/*
need something that can scan through the dom an determine the first player
to reach 3 in a row of any of these. loop through 0-8 divs to check if winner. */
const winners = {
  one: [0,1,2],
  two: [3,4,5],
  three: [6,7,8],
  four: [0,3,6],
  five: [0,4,8],
  six: [1,4,7],
  seven: [2,5,8],
  eight: [2,4,6]
 };



const checkWinner = () => {
    for (let j=0; j<8; j++) {

    }

}

const objectFactory = (player,select) =>  {

  return { player, select };

};  

const player1Select = objectFactory('Player One','X')
const player2Select = objectFactory('Player Two', 'O');

let clicker = function(i) {
  
      let selectedBox = document.getElementById(i);
      if (selectedBox.innerHTML.indexOf("X") != true) {
      //in here the selection should pass into the factory to create the x/o object.
      selectedBox.innerHTML = player1Select.select;
      console.log(selectedBox);
      }
  
  else {
    console.log("else");
  }

  document.getElementById("")

  }



