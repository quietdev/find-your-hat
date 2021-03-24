const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {


  constructor(field) {
    this._field = field;
    this.gameStatus = true;
    this.x = 0;
    this.y = 0;
    this.promptStatus = false;
  }

  gameLoop() {
    while (this.gameStatus != false) {  //makes the game run as long as the gameStatus is true
        if(this.promptStatus = false) {

        }
    }
  }

//Outputs to the console the current field layout
  fieldStatus() {
    for(let x in this._field) {
      console.log(this._field[x].join(''));
    }
  }


//evaluates if the tile the player is moving onto is a valid tile or not (hole, out of bounds)
  evaluate() {
    let newGridValue = '';
    if(this.x < 0 || this.y < 0 || this.y > this._field.length || this.x > this._field[0].length) {
        this.gameStatus = false;
        console.log("Game Over! You went out of bounds!");
    }

    else {
        newGridValue = this._field[this.y][this.x];
        if(newGridValue == "O") {
            this.gameStatus = false;
            console.log("Game Over! You fell into a hole...");
        }
        else if (newGridValue == "░") {
            this._field[this.y][this.x] = "*";
        }
        else {
            this.gameStatus == false;
            console.log("Congrats! You found the hat!");
        }
    }
  }

//Movement Evaluation
  movement(playerChoice) {
      playerChoice = playerChoice.toLowerCase();
        if(playerChoice == 'r') {
            this.x++;
            console.log("moving right 1")
            console.log(this.x, this.y)
        }
        else if(playerChoice == 'd'){
            this.y++;
            console.log("moving down 1")
            console.log(this.x, this.y)
        }
        else if(playerChoice == 'u') {
            this.y--;
            console.log("moving up 1")
            console.log(this.x, this.y)
        }
        else if(playerChoice == 'l') {
            this.x -= 1;
            console.log("moving left 1")
            console.log(this.x, this.y)
        }
        else {
            console.log("Invalid choice (still needs full implementation)");
        }
  }




}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.fieldStatus();
myField.movement('l');
myField.evaluate();