const generateBoard = () => {
    for (i=0; i < 9; i++ ){
      let newDiv = document.createElement("div");
      document.getElementById("gameBoard").appendChild(newDiv);
      newDiv.setAttribute("onclick", "clicker("+i+")");
      newDiv.setAttribute("class", "box");
      newDiv.setAttribute("id", i);

    }
    document.getElementById("selectX").addEventListener('click', function()
      {const playerSelect = playerFactory('player1','X'); } );
    document.getElementById("selectO").addEventListener('click', function()
      {const playerSelect = playerFactory('player1','O'); } );

  // need this to change based on selection chosen. 
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

const playerFactory = (player,select) =>  {
  console.log(player, select);
  return { player, select };

};  

//const player1Select = playerFactory('player1', select)


//const player2Select = objectFactory('Player Two', 'O');

let clicker = function(i) {
  
      let selectedBox = document.getElementById(i);
       // if (selectedBox.innerHTML.indexOf("X") != true) {
      // this should grab player/select parameters from whatever the player chooses and pass into the innerHTML.
       selectedBox.innerHTML = playerSelect[0,1];
        console.log(selectedBox);
        
        //}
    
 // else {
    //console.log("else");
 // }

  document.getElementById("")

  }



