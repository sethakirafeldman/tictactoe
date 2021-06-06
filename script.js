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
  //hides marker selection options, sets selection.
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

const checkWinner = () => {
  playerOne.placement.sort();
  playerTwo.placement.sort();
  gameBoardState.placement.sort();

      for ( let j=0; j <= winners.key.length; j++ ) {

          if (winners.key[j].every( (r) => playerOne.placement.includes(r) ) === true ) {
            endRound(playerOne);
            //return true;    
            }
            
          else if (winners.key[j].every( (s) => playerTwo.placement.includes(s) ) === true) { 
              endRound(playerTwo);
             // return true;
            }

          else if (gameBoardState.placement.length === 9) {
                  if (playerOne.status == "" || playerTwo.status == "" ) {
                      endRound();
                  }
            }
        } 
  } 

 let clicker = (i) => {   
    if (m === "X" || m ==="O") { 
        let selectedBox = document.getElementById(i);   

        if (selectedBox.innerText === "") {
          selectedBox.innerText = m;
          playerOne.placement.push(Number(selectedBox.id));
          gameBoardState.placement.push(Number(selectedBox.id));
          setTimeout(() => {
            computerMove() 
            }, 1000);
          checkWinner();
        }
        else {
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
   const randomMove = (max) => Math.floor(Math.random() * 9 );
   let computerSquare = document.getElementById( randomMove() );
   //let computerSquare = document.getElementById(miniMax());
    if (computerSquare.innerText === "") {
      computerSquare.innerText = playerTwo.marker;
      playerTwo.placement.push(Number(computerSquare.id));
      gameBoardState.placement.push(Number(computerSquare.id));
      checkWinner();
    }

    else { computerMove() }
}

  //const miniMax = () => {
        