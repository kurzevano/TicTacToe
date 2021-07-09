// Для определения выигрыша в крестики нолики
// todo: надо ещё проверять выигрыш по ВСЕМ диагоналям!!! (сейчас только по основным)
export default class MathHelper {

    static calculateWinner(squares, winNumber) {
        // check for horizontal wins along rows and diagonals
        let winner = MathHelper.calculateWinnerInner(squares, winNumber);
        if (winner != null) return winner;
        // check for possible vertical wins as well
        const stranspose = squares.map((col, i) => squares.map(row => row[i]));
        return MathHelper.calculateWinnerInner(stranspose, winNumber);
    }

    static calculateWinnerInner(squares, winNumber) {

        let curSymbol;
        for (let r = 0; r < squares.length; r++) {
            curSymbol = MathHelper.getWinnerSymbol(squares[r], winNumber);
            if (curSymbol != null) {
                return curSymbol;
            }
        }

        const diagonal = squares.map((row, r) => squares[r][r]);

        curSymbol = MathHelper.getWinnerSymbol(diagonal, winNumber);
        if (curSymbol != null) {
            return curSymbol;
        }

        const len = squares.length;
        const crossdiagonal = squares.map((row, r) => squares[r][len - r - 1]);

        curSymbol = MathHelper.getWinnerSymbol(crossdiagonal, winNumber);
        if (curSymbol != null) {
            return curSymbol;
        }

        return null;
    }

    // Является ли выигрышной массив ячеек
    // (строка является выигрышной, если в ней какой-то символ повторяется winNumber раз)
    // null - если такого нет
    static getWinnerSymbol(cellArray, winNumber) {
        let curNumber = 0;
        let curSymbol = null;

        for (var i = 0; i < cellArray.length; i++) {
            let elementValue = cellArray[i].value;
            if (elementValue === null) {
                curNumber = 0;
                curSymbol = null;
            } else {
                if (curSymbol === elementValue) {
                    curNumber++;
                    if (winNumber === curNumber) {
                        console.log("win");
                        return curSymbol;
                    }
                } else {
                    curNumber = 1;
                    curSymbol = elementValue;
                }
            }
        }

        return null;
    }
}