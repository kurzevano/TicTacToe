export default class Cell {
    constructor() {
        this.value = null;

        // weight используется для определения выигрыша
        this.weight = 0;
    }

    setValue(val) {
        this.value = val;

        // weight используется для определения выигрыша
        if (val == "X") {
            console.log(1);
            this.weight = 1;
        } else if (this.value == "O") {
            console.log(-1);
            this.weight = -1;
        } else {
            console.log(0);
            this.weight = 0;
        }
    }
}