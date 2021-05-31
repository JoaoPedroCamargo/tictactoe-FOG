import React from 'react';
import { useHistory } from 'react-router-dom';

import {Container, MenuContainer} from './styles';

const Dificulty: React.FC = () => {
  return (
    <Container>
      Select your dificulty
      <MenuContainer>
        <button>Easy</button>
        <button>Medium</button>
        <button>Hard</button>
      </MenuContainer>
      
      
    </Container>
  );
};

export default Dificulty;

