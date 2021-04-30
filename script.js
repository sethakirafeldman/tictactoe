selectedBox = "";



const generateBoard = () => {
    for (i=0; i < 9; i++ ){
      let newDiv = document.createElement("div");
      document.getElementById("gameBoard").appendChild(newDiv);
      newDiv.setAttribute("onclick", "clicker("+i+")");
      newDiv.setAttribute("class", "box");
      newDiv.setAttribute("id", i);
    }

    document.getElementById("selectX").addEventListener('click', () => {
      setMarker(m="X"); 
    });
    document.getElementById("selectO").addEventListener('click', () => {
      setMarker(m="O"); 
    });
  
  }

  function setMarker(m) {
      console.log("marker is: " +m)
      document.getElementById("selectX").className="hide-button";
      document.getElementById("selectO").className="hide-button";

      return m;
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

  // need to store player info and marker info in an object somewhere so that it can be used when checking whinners. perhaps a factory function in 
  // order create objects to check against the winner arrays. 
 let clicker = function(i) {   


   console.log(i);
    let selectedBox = document.getElementById(i);
 
   // if (selectedBox.innerHTML.indexOf("X") != true) {
   // this should grab player/select parameters from whatever the player chooses and pass into the innerHTML.
  
   selectedBox.innerHTML = m;
   console.log(selectedBox);
  
 };


const checkWinner = () => {
    for (let j=0; j<8; j++) {

    }

}



// stuff from factory not captured in scope of clicker function.

//const player1Select = playerFactory('player1', select)


//const player2Select = objectFactory('Player Two', 'O');



