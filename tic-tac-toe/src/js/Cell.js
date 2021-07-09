export default class Cell {
    constructor() {
        this.value = null;
        this.isWin = false;
        this.isFail = false;
    }

    setValue(val) {
        this.value = val;
    }

    setWin() {
        this.isWin = true;
        this.isFail = false;
    }

    setFail() {
        this.isWin = false;
        this.isFail = true;
    }
}