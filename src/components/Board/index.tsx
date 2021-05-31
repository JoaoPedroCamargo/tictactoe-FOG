import React, { useCallback, useEffect, useState } from 'react';

import Square from '../Square/index';

import {ContainerRow, ContainerColumn, TitleContainer} from './styles';

type SYMBOL = 'X' | 'O';
type BLOCK = SYMBOL | '-';

interface BoardProps {
  gameMode: 'easy' | 'meddium' | 'hard' | 'pvp' | 'online';
}

const Board: React.FC<BoardProps> = ({ gameMode }) => {
   const [board, setBoard] = useState<BLOCK[]>([
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
  ]);
  const [startingTurn, setStartingTurn] = useState<SYMBOL>('X');
  const [Xturn, setXTurn] = useState<boolean>(startingTurn === 'X');

  

  function handleClick(index: number) {
    if(board[index] === '-') {
      const newBoard = [...board];
      newBoard[index] = Xturn ? 'X' : 'O';
      setXTurn(!Xturn);
      setBoard(newBoard);
    }
  }

  function isBoardFull() {
    for(var i = 0; i < 9; i++){
      if(board[i] === '-'){
        return false;
      }
    }

    return true;
  }

  function minimax(Board: BLOCK[], depth: number, isMaximazing: boolean){
    const result = evaluateWinner(Board);
    if(result !== 0){
      return result;
    }

    else if(isMaximazing) {
      let bestScore: number = -1000;
      let testBoard = board;

      for(let i = 0; i < 9; i++){
        if(testBoard[i] === '-'){
          testBoard[i] = 'O';
          bestScore = Math.max(bestScore, minimax(testBoard, depth + 1, !isMaximazing));
          testBoard[i] = '-';
        }
      }

      return bestScore;

    } else {
      let bestScore: number = 1000;
      let testBoard = board;

      for(let i = 0; i < 9; i++){
        if(testBoard[i] === '-'){
          testBoard[i] = 'X';
          bestScore = Math.min(bestScore, minimax(testBoard, depth + 1, !isMaximazing));
          testBoard[i] = '-';
        }
      }

      return bestScore;
    }
  }

  function AiMove() {
    let bestScore = -1000;
    let bestMove = -1;
    let testBoard = board;
    let score = 0;

    testBoard.map((value, index) => {
      if(value === '-'){
        value = 'O';
        score = minimax(testBoard, 0, false);
        value = '-';
        console.log(value)
        if (score > bestScore) {
          bestScore = score;
          bestMove = index;
        }
      }
      return null;
    });

    if(bestMove !== -1){
      if(board[bestMove] === '-') {
        const newBoard = [...board];
        newBoard[bestMove] = 'O';
        setXTurn(!Xturn);
        setBoard(newBoard);
      }
    }
  }

  function evaluateWinner(Board: BLOCK[]) {
    if(Board[0] === Board[1] && Board[0] === Board[2] && Board[0] !== '-'){
      if(board[0] === 'X') {
        return -10;
      } else {
        return 10
      }
    }

    if(Board[3] === Board[4] && Board[3] === Board[5] && Board[3] !== '-'){
      if(Board[3] === 'X') {
        return -10;
      } else {
        return 10
      }
    }
    
    if(Board[6] === Board[7] && Board[6] === Board[8] && Board[6] !== '-'){
      if(Board[6] === 'X') {
        return -10;
      } else {
        return 10
      }
    } 
    
    if (Board[0] === Board[3] && Board[0] === Board[6] && Board[0] !== '-'){
      if(Board[0] === 'X') {
        return -10;
      } else {
        return 10
      }
    }

    if (Board[1] === Board[4] && Board[1] === Board[7] && Board[1] !== '-'){
      if(Board[1] === 'X') {
        return -10;
      } else {
        return 10
      }
    }

    if (Board[2] === Board[5] && Board[2] === Board[8] && Board[2] !== '-'){
      if(Board[2] === 'X') {
        return -10;
      } else {
        return 10
      }
    }

    if (Board[0] === Board[4] && Board[0] === Board[8] && Board[0] !== '-'){
      if(Board[0] === 'X') {
        return -10;
      } else {
        return 10
      }
    }

    if (Board[2] === Board[4] && Board[2] === Board[6] && Board[2] !== '-'){
      if(Board[2] === 'X') {
        return -10;
      } else {
        return 10
      }
    }

    return 0;
  }

  useEffect(() => {
    if(!Xturn) {
      console.log(board);
      AiMove();
    }

    if(evaluateWinner(board) === 10) {
      ClearBoard();
      alert("Jogador O venceu!");
    }
    
    else if(evaluateWinner(board) === -10) {
      ClearBoard();
      alert("Jogador X venceu!");
    }
    
    else if(isBoardFull()){
      ClearBoard();
      alert("Game Draw");
    }
  }, [board]);

  function ClearBoard() {
    setStartingTurn(startingTurn === 'X' ? 'O' : 'X');
    setXTurn(startingTurn === 'X');
    setBoard(['-','-','-','-','-','-','-','-','-',]);
  }

  return (
    <>
    <TitleContainer>
      Player: {Xturn ? 'X' : 'O'}
    </TitleContainer>
    <ContainerRow>
      <ContainerColumn>
        <Square onClick={() => handleClick(0)}>{board[0]}</Square>
        <Square onClick={() => handleClick(3)}>{board[3]}</Square>
        <Square onClick={() => handleClick(6)}>{board[6]}</Square>
      </ContainerColumn>

      <ContainerColumn>
        <Square onClick={() => handleClick(1)}>{board[1]}</Square>
        <Square onClick={() => handleClick(4)}>{board[4]}</Square>
        <Square onClick={() => handleClick(7)}>{board[7]}</Square>
      </ContainerColumn>

      <ContainerColumn>
        <Square onClick={() => handleClick(2)}>{board[2]}</Square>
        <Square onClick={() => handleClick(5)}>{board[5]}</Square>
        <Square onClick={() => handleClick(8)}>{board[8]}</Square>
      </ContainerColumn>

    </ContainerRow>
    </>
  );
};

export default Board;

