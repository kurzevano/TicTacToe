import Cell from "./Cell";
const Statuses = { Active: 'active', Pause: 'pause', Fail: 'fail', Win: 'win', Draw: 'draw' };

export default class Game {
    constructor(gameParameters) {
        console.log("PARAM: " + gameParameters);
        this.playerCount = gameParameters.playerCount;
        console.log("Active: " + Statuses.Active.toString());
        this.status = Statuses.Active;
        console.log("gameParameters.gameSymbols: " + gameParameters.gameSymbols);
        this.currentMove = gameParameters.gameSymbols[0];
        this.isOver = false;
        this.movesCount = 0;
        this.cells = new Array(Math.pow(gameParameters.selectedSize, 2)).fill().map(() => new Cell());
    }

    get isSinglePlayer() {
        return this.playerCount === 1;
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