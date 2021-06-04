import React from 'react';
import { useHistory } from 'react-router-dom';

import {Container, MenuContainer} from './styles';

const Home: React.FC = () => {

  const history = useHistory();

  function goToDificulty() {
    history.push('/singleplayer');
  }

  function goToMultiplayer() {
    history.push('/multiplayer');
  }

  function goToHowToPlay() {
    history.push('/HowToPlay');
  }

  return (
    <Container>
      Jogo da Velha
      <MenuContainer>
        <button onClick={goToDificulty}>Single Player</button>
        <button onClick={goToMultiplayer}>Multiplayer</button>
        <button onClick={goToHowToPlay}>Como jogar</button>
      </MenuContainer>
      
      
    </Container>
  );
};

export default Home;
