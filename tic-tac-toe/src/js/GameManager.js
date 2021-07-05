import Game from "./Game";

export default class GameManager {
    constructor() {
        this.currentGame = null;
        this.isStarted = false;
        this.isModeSelected = false;
        this.status = "Test";

        this.startGame();
    }

    startGame() {
        this.currentGame = new Game(3);
    }
}