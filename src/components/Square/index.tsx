import React, { MouseEventHandler } from 'react';

import {Container} from './styles'

interface SquareProps {
  onClick: MouseEventHandler;
  children: null | 'X' | 'O';
}

const Square: React.FC<SquareProps> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
        { children === null ? ' ' : children}
    </Container>
  );
};

export default Square;
