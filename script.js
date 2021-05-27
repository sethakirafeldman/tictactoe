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

const winners = {
  key:[ //stored as strings for easier compare.
    "[0,1,2]","[3,4,5]","[6,7,8]","[0,3,6]","[0,4,8]","[1,4,7]","[2,5,8]","[2,4,6]"
  ],
 };

 let winningKey = "";

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
const checkWinner = () => {
   winningKey = winners.key;
   playerOne.placement.sort();
      for (let j=0; j <= winningKey.length; j++ ) {
          let checkSquare = document.getElementById(j);
          if (checkSquare.id == 0) {
              // check is winners.key[0] has identical characters in cells
              // 0 through 2.
            console.log(winners.key[0]);
          }
        //all numbers in playerone.Placement need to
        // be checked to see if it matches all 3 numbers per
        //winningKey array [j];
        if (winningKey[j]===playerOne.placement) {
          console.log("WINNER!"+ playerOne.placement);
          //JSON.stringify can be used to compare arrays.
        }
        else {
          //console.log("no winner");
        }
        }

    }

 let clicker = (i) => {   
    if (m === "X" || m ==="O") { 
      let selectedBox = document.getElementById(i);   
      selectedBox.innerText = m;
      playerOne.placement.push(Number(selectedBox.id));
      checkWinner();
    }
    else {
      alert("please select a marker");
    };
 };
