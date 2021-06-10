import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 100px;

  margin-top: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 100px;

  margin-top: 35px;

  input {
    width: 300px;
    height: 100px;
    
    font-size: 30px;
    color: #505050;

    background-color: #909090;
    border-width: 4px;
    border-color: #bbbbbb;
    border-style: solid;
    
    padding: 10px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 100px;

    font-size: 30px;
    text-decoration: none;

    margin-left: 5px;

    background-color: #606060;

  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;


  button {
    width: 300px;
    height: 100px;
    font-size: 30px;

    margin-top: 10px;

    border: 0;
    background-color: #606060;

    cursor: pointer;

    &:hover {
      background-color: #909090;
      transition: all 0.2s, color 0.2s;
    }

  }
`;


