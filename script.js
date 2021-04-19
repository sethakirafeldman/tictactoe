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
  const printInfo = () => console.log("test: ");
  return { player, select, printInfo };

};  

const playerSelect = objectFactory('Player One','X')
console.log(playerSelect.player + playerSelect.select);

playerSelect.printInfo();

let clicker = function(i) {
    let selectedBox = document.getElementById(i);
    //in here the selection should pass into the factory to create the x/o object.
    this.testLog;
    selectedBox.innerHTML = "X";
    //selectedBox.innerHtml = this.type;
}