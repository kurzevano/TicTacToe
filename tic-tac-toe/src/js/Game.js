import Cell from "./Cell";
import MathHelper from "./MathHelper";
const Statuses = { Active: 'active', Pause: 'pause', Fail: 'fail', Win: 'win', Draw: 'draw' };

export default class Game {
    constructor(gameParameters) {
        this.playerCount = gameParameters.playerCount;
        this.gameSymbols = gameParameters.gameSymbols;
        let size = Number(gameParameters.selectedSize);
        // Создаём двумерный массив, заполняем каждый элемент новым значением Cell
        this.cells = new Array(size).fill().map(() => (new Array(size).fill().map(() => new Cell())));

        this.initialize();
    }

    initialize() {
        this.status = Statuses.Active;

        // Кто делает текущий ход (кресик или нолик)
        this.currentMove = this.getX();

        // Символ пользователя (крестик или нолик)
        this.initialMove = this.currentMove;

        this.isOver = false;
        this.movesCount = 0;
        this.cells.forEach(row => { row.forEach(cell => { cell.initialize() }); });
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
            cell.setValue(this.currentMove);
            this.movesCount++;
            this.checkForWinner();

            if (this.status === Statuses.Win) {
                cell.setWin();
                this.isOver = true;
            }
            if (this.status === Statuses.Fail) {
                cell.setFail();
                this.isOver = true;
            }
            if (this.status === Statuses.Draw) {
                this.isOver = true;
            }

            this.changePlayer();
        }
    }

    changePlayer() {
        this.currentMove == this.getX() ? (this.currentMove = this.getY()) : (this.currentMove = this.getX());
    }

    checkForWinner() {
        let result = MathHelper.calculateWinner(this.cells, 3);
        if (result === null) {
            if (this.movesCount == Math.pow(this.cells.length, 2)) {
                this.status = Statuses.Draw;
                return false;
            }
        } else {
            if (result === this.getX()) {
                if (this.initialMove === this.getX()) {
                    this.status = Statuses.Win;
                } else {
                    this.status = Statuses.Fail;
                }
            } else if (result === this.getY())
                if (this.initialMove === this.getY()) {
                    this.status = Statuses.Win;
                } else {
                    this.status = Statuses.Fail;
                }
        }

        return false;
    }

    restartGame() {
        this.initialize();
    }
}