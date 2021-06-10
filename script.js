selectedBox = "";
let m = "";

const playerOne = { 
  placement: placement = [],
  status: ""
};

const playerTwo = { 
  placement: placement = [],
  status: ""

};

const gameBoardState  = {
  placement: [],
  fullBoard: [0,1,2,3,4,5,6,7,8]
}; 

const winners = {
  key:[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]
  ],
 };



 // may be cleaner to change variable content whenever the text in gui is updated.

const generateBoard = () => {

    for (i=0; i < 9; i++ ) {
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

    
  };

const setComputer = () => {
    playerTwo.type = "computer";

    if (m === "X") {
      playerTwo.marker = "O";
    }
    else {
      playerTwo.marker = "X" 
    };
}
const setMarker = (m) => {
    document.querySelectorAll(".marker-button").className="hide-button";
    document.getElementById("promptMe").innerText = `You have chosen ${m}`;
    playerOne.type = "user"; 
    playerOne.marker = m;
    setComputer();
    return m;
};

const endRound = (player) => {
    console.log("end of round");
    if (player === playerOne || player === playerTwo) {
      player.status = "winner"
      document.getElementById("promptMe").innerText= player.type +" wins!";
    }
    else if (playerOne.status == "" || playerTwo.status == "") {
      document.getElementById("promptMe").innerText= "Stalemate! No one wins.";
    }
}

let findEmpty = ()=> {
  for  (let n = 0; n <= 8; n++) {
    if (gameBoardState.fullBoard.includes(gameBoardState.placement[n]) === true) {
      gameBoardState.empty = gameBoardState.fullBoard.filter(v => !gameBoardState.placement.includes(v) );
    }
  }  
};

const checkWinner = () => {
  playerOne.placement.sort();
  playerTwo.placement.sort();
  gameBoardState.placement.sort();
  gameBoardState.playerOne = playerOne.placement;
  gameBoardState.playerTwo = playerTwo.placement;
  findEmpty();

  const checkEvery = (check, target) => target.every(r => check.includes (r)); 

      for ( let j=0; j <= winners.key.length; j++ ) {
          
          if (checkEvery(playerOne.placement, winners.key[j]) === true ) {
            endRound(playerOne);
            //return true;    
            }
            
          else if (checkEvery(playerTwo.placement, winners.key[j]) === true) { 
              endRound(playerTwo);
             // return true;
            }

          else if (gameBoardState.placement.length === 9) {
                  if (playerOne.status == "" || playerTwo.status == "" ) {
                      endRound();
                  }
            }

          else {
                console.log("errorsaver");

          }  
        } 
  } 

 let clicker = (i) => {   

    if (playerOne.status !== "" || playerTwo.status !== "") {
        if (playerOne.status == "winner") {
            document.getElementById("promptMe").innerText = "Sorry, the game is already over. Player One is the winner";
      }  
        else if (playerTwo.status=="winner") {
            document.getElementById("promptMe").innerText ="Sorry, the game is already over. Player Two is the winner";
        }
    }

    else if (m === "X" || m ==="O") { 
        let selectedBox = document.getElementById(i);   

        if (selectedBox.innerText === "") {
          selectedBox.innerText = m;
          playerOne.placement.push(Number(selectedBox.id));
          gameBoardState.placement.push(Number(selectedBox.id));
          setTimeout(() => {
            computerMove() 
            }, 500);
          checkWinner();
        }
        else {
          document.getElementById("promptMe").innerText = "Please choose another square."
          console.log("square already filled");
        }
  }
     

    else {
      alert("please select a marker");
    }

 }

 const calculatedMove = () => {
  for (let l = 0; i < winners.key.length; l++) {
      let moveCheck = winners.key[l];
      console.log(moveCheck);
      return Math.floor(Math.random() * 6 );
  } // trying to make computer calculate move.
}

const computerMove = () => {
  if (playerTwo.status == "" && playerOne.status == "") {

   const randomMove = (max) => Math.floor(Math.random() * 9 );
   let computerSquare = document.getElementById( randomMove() );
   //let computerSquare = document.getElementById(miniMax());
      if (computerSquare.innerText === "") { //
          computerSquare.innerText = playerTwo.marker;
          playerTwo.placement.push(Number(computerSquare.id));
          gameBoardState.placement.push(Number(computerSquare.id));
          checkWinner();
      }

      else { computerMove() 
      }

  }

  else { 
    
    console.log("Game over, computer move cancelled.")

  }

}
  
const miniMax = (currBoardState, currMarker) => {
 // check step7 on
 // https://www.freecodecamp.org/news/minimax-algorithm-guide-how-to-create-an-unbeatable-ai/

}
        