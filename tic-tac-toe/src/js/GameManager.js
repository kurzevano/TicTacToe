import Game from "./Game";

export default class GameManager {
    constructor() {
        this.currentGame = null;
        this.isStarted = false;
        this.isModeSelected = false;
        this.status = "Test";
    }

    startGame() {
        this.currentGame = new Game(3);
        this.isStarted = true;
    }
}