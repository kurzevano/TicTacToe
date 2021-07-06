// Для определения выигрыша в крестики нолики
// Взято с https://stackoverflow.com/questions/16571035/javascript-tictactoe-if-winner-detection
const addCells = (a, b) => {
    return a + Number(b.weight);
}

export default class MathHelper {

    static sum(array) {
        return array.reduce(addCells, 0);
    }

    static calculateWinner(squares) {
        // check for horizontal wins along rows and diagonals
        let winner = MathHelper.calculateWinnerInner(squares);
        if (winner !== 0) return winner;
        // check for possible vertical wins as well
        const stranspose = squares.map((col, i) => squares.map(row => row[i]));
        return MathHelper.calculateWinnerInner(stranspose);
    }

    static calculateWinnerInner(squares) {
        for (let r = 0; r < squares.length; r++) {
            if (squares[r].length === MathHelper.sum(squares[r])) {
                return 1;
            }
            if (squares[r].length === -MathHelper.sum(squares[r])) {
                return -1;
            }
        }

        const diagonal = squares.map((row, r) => squares[r][r]);

        if (squares[0].length === MathHelper.sum(diagonal)) {
            return 1;
        }
        if (squares[0].length === -MathHelper.sum(diagonal)) {
            return -1;
        }

        const len = squares.length;
        const crossdiagonal = squares.map((row, r) => squares[r][len - r - 1]);

        if (squares[0].length === MathHelper.sum(crossdiagonal)) {
            return 1;
        }
        if (squares[0].length === -MathHelper.sum(crossdiagonal)) {
            return -1;
        }

        return 0;
    }
}