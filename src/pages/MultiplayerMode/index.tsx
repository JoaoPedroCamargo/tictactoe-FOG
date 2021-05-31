import React from 'react';
import { useHistory } from 'react-router-dom';

import {Container, MenuContainer} from './styles';

const MultiplayerMode: React.FC = () => {

  const history = useHistory();

  function goToGame() {
    history.push('/game');
  }

  return (
    <Container>
      Multiplayer
      <MenuContainer>
        <button>Host Game</button>
        <button>Join Room</button>
        <button onClick={goToGame}>Local</button>
      </MenuContainer>
    </Container>
  );
};

export default MultiplayerMode;
