import React from 'react';
import { useHistory } from 'react-router-dom';

import {Container, MenuContainer} from './styles';

type GameProps = 'easy' | 'meddium' | 'hard';

const Dificulty: React.FC = () => {
  const history = useHistory();
  
  const goToGame = (gameMode: GameProps) => {
    history.push(`/game/${gameMode}`);
  }

  return (
    <Container>
      Selecione a dificuldade
      <MenuContainer>
        <button onClick={() => {goToGame('easy')}}>Fácil</button>
        <button onClick={() => {goToGame('meddium')}}>Médio</button>
        <button onClick={() => {goToGame('hard')}}>Difícil</button>
      </MenuContainer>
    </Container>
  );
};

export default Dificulty;

