import React, { MouseEventHandler, ReactChildren } from 'react';

import {Container} from './styles'

interface SquareProps {
  onClick: MouseEventHandler;
  children: '-' | 'X' | 'O';
}

const Square: React.FC<SquareProps> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
        { children === '-' ? ' ' : children}
    </Container>
  );
};

export default Square;
