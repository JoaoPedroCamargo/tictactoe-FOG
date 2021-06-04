import React from 'react';

import { Container, ContainerRow, ContainerColumn } from './styles'

    type playerProps = 'X' | 'O' | null;
type gridProps = playerProps[];

interface fakeBoardProps {
    getGrid: gridProps;
}

const fakeBoard: React.FC<fakeBoardProps> = ({ getGrid }) => {

    return (
    <ContainerRow>
        <ContainerColumn>
            <Container >{getGrid[0]}</Container>
            <Container >{getGrid[3]}</Container>
            <Container >{getGrid[6]}</Container>
        </ContainerColumn>
        <ContainerColumn>
            <Container >{getGrid[1]}</Container>
            <Container >{getGrid[4]}</Container>
            <Container >{getGrid[7]}</Container>
        </ContainerColumn>
        <ContainerColumn>
            <Container >{getGrid[2]}</Container>
            <Container >{getGrid[5]}</Container>
            <Container >{getGrid[8]}</Container>
        </ContainerColumn>
    </ContainerRow>

    );
};

export default fakeBoard;
