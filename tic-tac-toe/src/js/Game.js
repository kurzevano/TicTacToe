import Cell from "./Cell";
import Enum from "./Enum";

const Modes = Enum({ OnePlayer: 'one', TwoPlayer: 'two' });
//
const Statuses = Enum({ Active: 'active', Pause: 'pause', Fail: 'fail', Win: 'win', Draw: 'draw' });

export default class Game {
    constructor(gameParameters) {
        console.log("PARAM: " + gameParameters);
        this.playerCount = gameParameters.playerCount;
        this.status = Statuses.Active;
        console.log("gameParameters.gameSymbols: " + gameParameters.gameSymbols);
        this.currentMove = gameParameters.gameSymbols[0];
        this.isOver = false;
        this.movesCount = 0;
        this.cells = new Array(Math.pow(gameParameters.selectedSize, 2)).fill().map(() => new Cell());
    }

    get isSinglePlayer() {
        return this.mode === Modes.OnePlayer;
    }

    makeMove(i) {
        if (this.status === Statuses.Active && !this.cells[i].value) {
            this.cells[i].value = this.currentMove;
            this.movesCount++;
            this.checkForWinner();
            this.changePlayer();
        }
    }

    changePlayer() {
        //this.currentMove == GameSymbols.X ? (this.currentMove = GameSymbols.O) : (this.currentMove = GameSymbols.X);
    }

    checkForWinner() {
        if (this.movesCount == this.cells.length) {
            this.status = Statuses.Draw;
        }
        return false;
    }

}