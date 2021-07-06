export default class GameParameters {
    constructor() {
        this.isFieldSizeSelected = false;
        this.setGameSymbols({ X: "X", O: "O" });
    }

    setGameSymbols(symbols) {
        this.gameSymbols = symbols;
    }

    setSelectedSize(size) {
        this.selectedSize = size;
        this.isFieldSizeSelected = true;
    }

    setPlayerCount(playerCount) {
        this.playerCount = playerCount;
        this.isPlayerCountSelected = true;
    }

    get getFieldSizes() {
        return [3, 4, 5, 6, 7, 8, 9, 10];
    }
}