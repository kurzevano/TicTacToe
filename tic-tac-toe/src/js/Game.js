import Cell from "./Cell";
const Statuses = { Active: 'active', Pause: 'pause', Fail: 'fail', Win: 'win', Draw: 'draw' };

export default class Game {
    constructor(gameParameters) {
        this.playerCount = gameParameters.playerCount;
        this.gameSymbols = gameParameters.gameSymbols;
        this.status = Statuses.Active;
        this.currentMove = this.getX();
        this.isOver = false;
        this.movesCount = 0;
        let size = Number(gameParameters.selectedSize);
        // Создаём двумерный массив, заполняем каждый элемент новым значением Cell
        this.cells = new Array(size).fill().map(() => (new Array(size).fill().map(() => new Cell())));
        this.cells[0][0].id = 1;
        this.cells[0][1].id = 2;
    }

    // Получает значение символа крестика или нолика
    getSymbol(i) {
        let val = Object.entries(this.gameSymbols)[i][1];
        return val;
    }

    // Получает значение символа крестика
    getX() {
        return this.getSymbol(0);
    }

    // Получает значение символа нолика
    getY() {
        return this.getSymbol(1);
    }

    get isSinglePlayer() {
        return this.playerCount === 1;
    }

    makeMove(cell) {
        if (this.status === Statuses.Active && !cell.value) {
            console.log("CM: " + this.currentMove);
            cell.value = this.currentMove;
            this.movesCount++;
            this.checkForWinner();
            this.changePlayer();
        }
    }

    changePlayer() {
        this.currentMove == this.getX() ? (this.currentMove = this.getY()) : (this.currentMove = this.getX());
    }

    checkForWinner() {
        if (this.movesCount == Math.pow(this.cells.length, 2)) {
            this.status = Statuses.Draw;
        }
        return false;
    }

}