import Game from "./Game";

export default class GameManager {
    constructor() {
        this.currentGame = null;
        this.isStarted = false;
        this.status = "Test";
    }

    startGame(gameParameters) {
        //console.log("PARAM_GM: " + gameParameters);
        this.currentGame = new Game(gameParameters);
        this.isStarted = true;
    }
}