import React, { useCallback, useEffect, useState } from 'react';
import socketIoClient from 'socket.io-client';
import { useHistory } from 'react-router';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Square from '../Square/index';

import {ContainerRow, ContainerColumn, TitleContainer} from './styles';

import Board from '../../utils/board';

const ENDPOINT = 'https://api-tictactoe-fog.herokuapp.com/';

type playerProps = 'X' | 'O';
type gridProps = playerProps | null;
type winnerProps = playerProps | 'DRAW' | 'noWinner' | null;

interface RoomProps {
    roomCode: string;
}

const arr = new Array(9).fill(null);

const OnlineGameBoard: React.FC<RoomProps> = ({ roomCode }) => {
    const [currentTurn, setCurrentTurn] = useState<playerProps>('X');
    const [startingPlayer, setStartingPlayer] = useState<playerProps>('X');
    const [grid, setGrid] = useState<gridProps[]>(arr);
    const [roomFull, setRoomFull] = useState<boolean>(false);
    const [currentPlayer, setCurrentPlayer] = useState<playerProps>();

    const history = useHistory();

    const socket = socketIoClient(ENDPOINT);
    useEffect(() => {
        let isMounted = true
        
        if (isMounted){

            socket.emit('joinRoom', roomCode, (error?: string) => {
                if(error) {
                    alert('Room is full');
                    setRoomFull(true);
                    history.push('/multiplayer')
                }
            })
        }

        return () => { isMounted = false }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let isMounted = true

        if(isMounted){
            socket.on('roomData', ({ Players }) => {
                if(Players.length === 2){
                    setRoomFull(true);
                }
            });
    
            socket.on('currentPlayerData', ({ symbol }) => {
                setCurrentPlayer(symbol);
            });
        }

        return () => { isMounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        socket.on('updatedGrid', ({Grid, CurrentTurn}) => {
            setGrid(Grid);
            setCurrentTurn(CurrentTurn);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const move  = useCallback((index) => {
        const gridCopy = grid.concat();

        gridCopy[index] = currentTurn;
        socket.emit('updateGrid', { Room: roomCode, Grid: gridCopy, CurrentTurn: currentTurn });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currentTurn, grid]
    );

    const handleClick = (index: number) => {
        if(grid[index] === null && currentTurn === currentPlayer && roomFull){
            move(index);
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
            setTimeout(() => {
            setGrid(arr);
            declareWinner(winner);
            setCurrentTurn(startingPlayer === 'X' ? 'O' : 'X');
            setStartingPlayer(startingPlayer === 'X' ? 'O' : 'X');
            }, 500);
        }
    }, [grid, startingPlayer])

    return (
        <>
        <TitleContainer>
            {roomFull ?
            currentTurn === currentPlayer ? <>Sua vez</> : <>Vez do oponente</>
            : <>Esperando outro jogador</>
            }
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

        <TitleContainer>
            <CopyToClipboard text={`https://tictactoefog.netlify.app/onlineGame/${roomCode}`}>
                <button>Room: {roomCode}</button>
            </CopyToClipboard>
        </TitleContainer>
        </>
    );
};

export default OnlineGameBoard;

