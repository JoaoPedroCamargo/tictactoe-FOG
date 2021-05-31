import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 150px;
    height: 150px;

    margin: 10px;

    font-family: 'Permanent Marker', cursive;
    font-size: 100px;

    background-color: #606060;

    cursor: pointer;

    &:hover {
        background-color: #909090;
        transition: background-color 0.5s, color 0.3s;
    }
`;