import Cell from "./Cell";
//import Modes from "./GlobalObjects";
//import Statuses from "./GlobalObjects";
//import GameSymbols from "./GlobalObjects";

import Enum from "./Enum";

export const Modes = Enum({ OnePlayer: 'one', TwoPlayer: 'two' });
const GameSymbols = Enum({ X: 'X', O: 'O' });
const Statuses = Enum({ Active: 'active', Pause: 'pause', Fail: 'fail', Win: 'win', Draw: 'draw' });

export default class Game {
    constructor(size) {
        this.mode = Modes.OnePlayer;
        this.status = Statuses.Active;
        this.currentMove = GameSymbols.X;
        this.isOver = false;
        this.movesCount = 0;
        this.cells = new Array(size * size).fill().map(() => new Cell());
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
        this.currentMove === GameSymbols.X ? (this.currentMove = GameSymbols.O) : (this.currentMove = GameSymbols.X);
    }

    checkForWinner() {
        if (this.movesCount === this.cells.length) {
            this.status = Statuses.Draw;
        }
        return false;
    }

}