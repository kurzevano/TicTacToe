import Game from "./Game";

export default class GameManager {
    constructor() {
        this.setNull();
    }

    // Устанавливает стартовые значения, когда игра ещё не начата
    setNull() {
        this.currentGame = null;
        this.isStarted = false;
    }

    startGame(gameParameters) {
        this.currentGame = new Game(gameParameters);
        this.isStarted = true;
    }

    // Начинает игру с начала с такими же параметрами
    restartGame() {
        this.currentGame.restartGame();
    }
}