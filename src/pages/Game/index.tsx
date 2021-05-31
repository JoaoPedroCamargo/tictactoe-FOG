import React from 'react';
import { useHistory } from 'react-router-dom';

import Board from '../../components/Board/index';


const Game: React.FC = () => {
  return (
    <>
    <Board gameMode={"pvp"}/>
    </>
  );
};

export default Game;

