import Board from './board';

type minimaxReturn = [number, number];

const minimax = (Board: Board, Xturn: boolean): minimaxReturn => {
    let bestMove = -1;
    let bestScore = -1000;

    for(let val of Board.getEmptyPos()) {
        let copy = Board.clone();
        copy.makeMove(val, Xturn ? 'X' : 'O');
        let score = isMaximazing(copy, 0, false);
        if(score > bestScore) {
            bestScore = score;
            bestMove = val;
        }
    }
    return [bestScore, bestMove];
}

const isMaximazing  = (Board: Board, depth: number, isMax: boolean) => {
    let winner = Board.getWinner();
    if (winner === 'X') {
        return -10 + depth;
    } 
    else if(winner === 'O') {
        return 10 - depth;
    } 
    else if(winner === 'DRAW'){
        return 0;
    }

    if(isMax){
        let bestScore = -100;
        for(let val of Board.getEmptyPos()){
            let copy = Board.clone();
            copy.makeMove(val, 'O');
            bestScore = Math.max(bestScore, isMaximazing(copy, depth + 1, !isMax));
        }

        return bestScore;
    } else {
        let bestScore = 100;
        for(let val of Board.getEmptyPos()){
            let copy = Board.clone();
            copy.makeMove(val, 'X');
            bestScore = Math.min(bestScore, isMaximazing(copy, depth + 1, !isMax));
        }

        return bestScore;
    }
}

export default minimax;