import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 80px;
    height: 80px;

    margin: 3px;

    font-family: 'Permanent Marker', cursive;
    font-size: 50px;

    background-color: #606060;

`;

export const ContainerRow = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;

    margin: 20px 25px 20px;
    
`;

export const ContainerColumn = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;

    flex-direction: column;
`;