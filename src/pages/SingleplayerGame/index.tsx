import React from 'react';
import { useParams } from 'react-router';

import Board from '../../components/Board/index';

interface GameProps {
  difficulty: 'easy' | 'meddium' | 'hard' | 'local' | 'online';
}

const SingleplayerGame: React.FC<GameProps> = () => {
  const { difficulty } = useParams<GameProps>();

  return (
    <>
    <Board gameMode={difficulty}/>
    </>
  );
};

export default SingleplayerGame;

