import Enum from "./Enum";
const GameSymbols = Enum({ X: 'X', O: 'O' });
export default class GameParameters {

    constructor() {
        this.isFieldSizeSelected = false;
        this.setGameSymbols(GameSymbols);
    }

    setGameSymbols(symbols) {
        this.gameSymbols = symbols;
    }

    setSelectedSize(size) {
        this.selectedSize = size;
        this.isFieldSizeSelected = true;
    }

    setPlayerCount(playerCount) {
        this.isPlayerCountSelected = playerCount;
        this.playerCount = playerCount;
    }

    get getFieldSizes() {
        return [3, 4, 5, 6, 7, 8, 9, 10];
    }
}