import styled from 'styled-components';

export const ContainerRow = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;
    
`;

export const ContainerColumn = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;

    flex-direction: column;
`;

export const TitleContainer = styled.div`
    font-size: 50px;

    display: flex;
    justify-content: center;

    margin: 10px;

    button {
    width: 250px;
    height: 50px;
    font-size: 30px;

    margin-top: 10px;

    border: 0;

    cursor: pointer;

    &:hover {
      background-color: #505050;
      transition: all 0.2s, color 0.2s;
    }

  }
`;

