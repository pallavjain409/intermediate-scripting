class Suduko {
    constructor() {
        this.matrix;
        this._col
        this._rows
        this._grid
    }

    init(arr) {
        this.matrix = arr;
        this._reorganizedata(arr)
        return arr;
    }

    isValid() {
        return this._validate(this._rows) && this._validate(this._col) && this._validate(this._grid)
    }

    _validate(arr) {
        for (let row of arr) {
            row = row.filter(number => this.isNotEmpty(number))
            if (row.length !== new Set(row).size) {
                return false
            }
        }
        return true;
    }

    isNotEmpty(number) {
        return number !== "."
    }
    _reorganizedata(data) {
        this.matrix = data;
        this._rows = data;
        this._col = [];
        this._grid = [];

        for (let i = 0; i < 9; i++) {
            this._col.push([]);
            this._grid.push([]);
        }
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                this._col[col][row] = (data[row][col]);
                let gridRow = Math.floor(row / 3);
                let gridCol = Math.floor(col / 3);
                let gridIndex = gridRow * 3 + gridCol;
                this._grid[gridIndex].push(data[row][col]);
            }
        }

    }
}

let sudukoInvalid = new Suduko();
sudukoInvalid.init(
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", "3", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]) 

 console.log(sudukoInvalid.isValid())   // // false
sudukoValid = new Suduko();
sudukoValid.init(  [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
   ])
console.log(sudukoValid.isValid()) // false


