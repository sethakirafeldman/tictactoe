const gameBoard = [""]; 

let playerX = [""];

let playerO = [""];



let generateBoard = function(){
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

const playerSelect = objectFactory('Player One','X')

let clicker = function(i) {
    let selectedBox = document.getElementById(i);
    //in here the selection should pass into the factory to create the x/o object.
    selectedBox.innerHTML = playerSelect.select;
    console.log(selectedBox);
    //selectedBox.innerHtml = this.type;
}


/* possible winners: 012 048 036 147 258 345 679

need something that can scan through the dom an determine the first player
to reach 3 in a row of any of these. loop through 0-8 divs to check if winner. 