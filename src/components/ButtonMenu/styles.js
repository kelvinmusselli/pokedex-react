import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px 50px;
  align-content: center;
  justify-content: center;
`;

export const ButtonsMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonNameId = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  height: 30px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #ec6d6d;
    border-radius: 4px;
  }
`;

export const ButtonAbility = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  height: 30px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #ec6d6d;
    border-radius: 4px;
  }
`;
