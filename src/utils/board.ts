type playerProps = 'X' | 'O';
type resultProps = gridProps | 'DRAW' | 'noWinner';
type gridProps = 'X' | 'O' | null;

export default class Board {
    grid: Array<gridProps>;
    winnerIndex: number | null;

    constructor (grid: Array<gridProps> = Array(9).fill(null)) {
        this.grid = grid;
        this.winnerIndex = null;
    }

    makeMove = (position: number, player: playerProps) => {
        if (this.grid[position] === null) {
            this.grid[position] = player;
        }
    }

    getEmptyPos = (grid = this.grid) => {
        let empty:Array<number> = [];
        grid.forEach((value, index) => {
            if(value === null) {
                empty.push(index);
            }
        });

        return empty;
    }

    isEmpty = (grid = this.grid) => {
        return this.getEmptyPos(grid).length === 9;  
    }

    getWinner = (grid = this.grid): resultProps => {
        const winPositions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        let result:resultProps = 'noWinner';
        winPositions.forEach((value, index) => {
            if (
                grid[value[0]] !== null && 
                grid[value[0]] === grid[value[1]] && 
                grid[value[0]] === grid[value[2]]
            ){
                result = grid[value[0]];
                this.winnerIndex = index;
            } else if (result === 'noWinner' && this.getEmptyPos(grid).length === 0){
                result = 'DRAW';
                this.winnerIndex = null;
            }
        });

        return result;
    };

    clone = () => {
        return new Board(this.grid.concat());
    }
};