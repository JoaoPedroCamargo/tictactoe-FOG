import React from 'react';

import FakeBoard from '../../components/fakeBoard/index'

import { MainContainer, Title, Paragraf, ContainerRow, BoardTitle } from './styles';

const HowToPlay: React.FC = () => {
  return (
    <div>
      <MainContainer >
        <Title>Como jogar</Title>
        <Paragraf>O jogo consiste em dois jogadores, cada um representado por um simbolo: X ou O.</Paragraf>
        <Paragraf>O tabuleiro utilizado é o abaixo:</Paragraf>
        <FakeBoard getGrid={['X', null, 'O', null, 'O', null, 'X', 'X', 'O']} />
        <Paragraf>Para vencer um jogador deve conseguir uma sequência de 3 simbolos na vertical, horizontal ou diagonal</Paragraf>
        <ContainerRow>
          <BoardTitle>
            Vertical
            <FakeBoard getGrid={['X', null, 'O', 'X', 'O', null, 'X', 'X', 'O']} />
          </BoardTitle>
          <BoardTitle>
            Horizontal
            <FakeBoard getGrid={['X', null, 'X', 'O', 'O', 'O', 'X', null, 'O']} />
          </BoardTitle>
          <BoardTitle>
            Diagonal
            <FakeBoard getGrid={['O', null, 'O', null, 'O', 'X', 'X', 'X', 'O']} />
          </BoardTitle>
        </ContainerRow>
        <Paragraf>O jogador X sempre começa o jogo, após ele fazer sua jogada é a vez do jogador O e assim por diante</Paragraf>
        <Paragraf>Se acabarem os espaços no tabuleiro e não houver um ganhador o jogo é empatado</Paragraf>
        <ContainerRow>
          <BoardTitle>
            Empate
            <FakeBoard getGrid={['X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O']} />
          </BoardTitle>
        </ContainerRow>
      </MainContainer>
    </div>
  );
};

export default HowToPlay;
