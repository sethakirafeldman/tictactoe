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
  }


/* possible winners: 012 048 036 147 258 345 679

need something that can scan through the dom an determine the first player
to reach 3 in a row of any of these. loop through 0-8 divs to check if winner. */