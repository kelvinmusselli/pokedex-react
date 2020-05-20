import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px 50px;
  align-content: center;
  justify-content: center;
  height: 400px;
  flex-direction: column;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1``;

export const ListPokemons = styled.div`
  display: flex;
  background: red;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 4px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Pokemons = styled.div`
  display: flex;
  justify-content: center;
  height: 90px;
  width: 90px;
  align-items: center;
  border: 1px solid #fff;
  color: #fff;
`;
export const FormButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -35px;
  button {
    background: none;
    height: 30px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    margin: 0 15px;
  }
`;
