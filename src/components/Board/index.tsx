import React, { useCallback, useEffect, useState } from 'react';

import Square from '../Square/index';

import {ContainerRow, ContainerColumn, TitleContainer} from './styles';

import minimax from '../../utils/minimax';
import Board from '../../utils/board';

interface BoardProps {
  gameMode: GameProps | 'local' | 'online';
}

type playerProps = 'X' | 'O';
type gridProps = playerProps | null;
type GameProps = 'easy' | 'meddium' | 'hard';
type winnerProps = playerProps | 'DRAW' | 'noWinner' | null;

const arr = new Array(9).fill(null);

const GameBoard: React.FC<BoardProps> = ({ gameMode }) => {
  const [Xturn, setXturn] = useState<boolean>(true);
  const [startingPlayer, setStartingPlayer] = useState<playerProps>('X');
  const [grid, setGrid] = useState<gridProps[]>(arr);

  const move  = useCallback((index) => {
    const gridCopy = grid.concat();
      
    gridCopy[index] = Xturn ? 'X' : 'O';
    setGrid(gridCopy);
    setXturn(!Xturn);
    }, [Xturn, grid]
  );

  const IAmove = useCallback(() => {
    const board = new Board(grid.concat());
    const emptyIndices = board.getEmptyPos(grid);

    let indexMove;

    switch (gameMode) {
      case 'easy':
        const moveProbEasy = !board.isEmpty(grid) && Math.random() < 0.5;
        if (moveProbEasy) {
          indexMove = minimax(board, Xturn)[1];
        } else {
          do{
            indexMove = Math.round(Math.random() * 8);
          } while(!emptyIndices.includes(indexMove));
        }
        break;

        case 'meddium':
          const moveProbMeddium = !board.isEmpty(grid) && Math.random() < 0.7;
          if (moveProbMeddium) {
            indexMove = minimax(board, Xturn)[1];
          } else {
            do{
              indexMove = Math.round(Math.random() * 8);
            } while(!emptyIndices.includes(indexMove));
          }
          break;

        case 'hard':
          default:
            indexMove = board.isEmpty(grid) ? Math.round(Math.random() * 8) : minimax(board, Xturn)[1];
    }

    if(!grid[indexMove]){
      move(indexMove);
    }
  },[Xturn, gameMode, grid, move]);

  useEffect(() => {
    if (!Xturn && gameMode !== 'local'){
      IAmove();
      setXturn(!Xturn);
    }
  }, [IAmove, Xturn, gameMode]);

  const handleClick = (index: number) => {
    if(grid[index] === null) {
      move(index);
      setXturn(!Xturn);
    }
  }

  useEffect(() => {
    const board = new Board(grid.concat());
    const winner = board.getWinner(grid);
    const declareWinner = (winner: winnerProps) => {

      switch (winner) {
        case 'X':
          alert('Player X wins!');
          break;

        case 'O':
          alert('Player O wins!');
          break;

        case 'DRAW':  
          alert("it's a draw");
          
      }      
    }

    if (winner !== 'noWinner') {
      declareWinner(winner);
      setGrid(arr);
      setXturn(startingPlayer !== 'X');
      setStartingPlayer(startingPlayer === 'X' ? 'O' : 'X');
    }
  }, [grid, startingPlayer])

  return (
    <>
    <TitleContainer>
      Player: {Xturn ? 'X' : 'O'}
    </TitleContainer>
    <ContainerRow>
      <ContainerColumn>
        <Square onClick={() => handleClick(0)}>{grid[0]}</Square>
        <Square onClick={() => handleClick(3)}>{grid[3]}</Square>
        <Square onClick={() => handleClick(6)}>{grid[6]}</Square>
      </ContainerColumn>

      <ContainerColumn>
        <Square onClick={() => handleClick(1)}>{grid[1]}</Square>
        <Square onClick={() => handleClick(4)}>{grid[4]}</Square>
        <Square onClick={() => handleClick(7)}>{grid[7]}</Square>
      </ContainerColumn>

      <ContainerColumn>
        <Square onClick={() => handleClick(2)}>{grid[2]}</Square>
        <Square onClick={() => handleClick(5)}>{grid[5]}</Square>
        <Square onClick={() => handleClick(8)}>{grid[8]}</Square>
      </ContainerColumn>

    </ContainerRow>
    </>
  );
};

export default GameBoard;

