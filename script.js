selectedBox = "";
let m = "";

const playerOne = { 
placement: placement = []
};

const playerTwo = { };

const gameBoardState = {
  xPos: [],
  oPos: []
}; 


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
  const setMarker = (m) => {
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
 };

 const checkWinner = () => {
  let winners = winners.key;
      for (let j=0; j <= winners.length; j++ ) {
        console.log(winners);
        // I want to loop through winners.key until a match is found.
        /*if (winners ===playerOne.placement) {
            console.log("WINNER!"+ playerOne.placement);

        }*/
        }

    }

 let clicker = (i) => {   
    if (m === "X" || m ==="O") { 
      let selectedBox = document.getElementById(i);   
      selectedBox.innerText = m;
      let p1PlacementArr = playerOne.placement;
      p1PlacementArr.push(selectedBox.id);
      checkWinner();
    }
    else {
      alert("please select a marker");
    };
 };
