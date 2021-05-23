selectedBox = "";
let m = "";
const playerOne = { 
placement: placement = []
};

const playerTwo = { };

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
  // sets computer to opposite of player sel. 
  const setComputer = () => {
      playerTwo.type = "computer";
      if (m === "X") {
        playerTwo.marker = "O";
      }
      else {
        playerTwo.marker = "X" 
      };
  }
  //hides marker selection options, sets selection.
  function setMarker(m) {
      document.querySelectorAll(".marker-button").className="hide-button";
      document.getElementById("promptMe").innerText = `You have chosen ${m}` //template string :) 
      playerOne.type = "user"; // adds property to object.
      playerOne.marker = m;
      setComputer();
      return m;

      };

      
/*
need something that can scan through the dom an determine the first player
to reach 3 in a row of any of these. loop or filter through 0-8 divs to check if winner. */
const winners = {
  key:[ 
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]
  ],
  compare: [ ["","",""]] 
 };



 /*
 const checkWinner = () => {
  for (let j=0; j<8; j++) { 

      let checkScore = document.getElementById(j);
  // checks all cells for contents.
  
    if ( checkScore.innerText ==="X") { // for x
  // iterate three times to move through l, then once to move to next array, then repeat.
        xPlacement.push(j);
        while (xPlacement.length >= 4) {
            xPlacement.shift();
            // cuts array down to only 3 entries.
            winners.compare[0] = xPlacement;
            }
          }

      else if ( checkScore.innerText==="O" ) {

      }
  };

 };
*/

  // need to store player info and marker info in an object somewhere so that it can be used when checking winners. 
  //perhaps a factory function in 
  // order create objects to check against the winner arrays.

 let clicker = (i) => {   
    if (m === "X" || m ==="O") { 
      let selectedBox = document.getElementById(i);   
      selectedBox.innerText = m;
      //playerOne.placement[plaArr] = selectedBox.id;
      let p1PlacementArr = playerOne.placement;
      p1PlacementArr.push(selectedBox.id);
      checkWinner(m);
    }
    else {
      alert("please select a marker");
    };
 };

const checkWinner = (m) => { 
}
