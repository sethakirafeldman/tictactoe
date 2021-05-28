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
          /* not sure if I should just used checkSquare
          to  check innerText to determine winner or use playerOne.placement
          */ 
          if (checkSquare.id == 0 && checkSquare.innerText !== "") {
              let k = 0;
              while (k <= 2) {
              console.log(playerOne.placement[k]);
              k++;
              if (playerOne.placement) {
                  // this should check if 
              }
            }
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
