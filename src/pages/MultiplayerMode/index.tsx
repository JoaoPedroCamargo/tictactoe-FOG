import React from 'react';
import { useHistory } from 'react-router-dom';

import {Container, MenuContainer} from './styles';

const MultiplayerMode: React.FC = () => {

  const history = useHistory();

  function goToGame() {
    history.push('/game/local');
  }

  return (
    <Container>
      Multiplayer
      <MenuContainer>
        <button>Criar partida</button>
        <button>Localizar partida</button>
        <button onClick={goToGame}>Local</button>
      </MenuContainer>
    </Container>
  );
};

export default MultiplayerMode;
