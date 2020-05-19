import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 50%;
    input {
      background: none;
      border: 1px solid;
      border-radius: 4px;
      margin-bottom: 6px;
      height: 30px;
      text-indent:4px;
    }
    button{
      border-radius: 4px;
      color: #fff;
      background: red;
      border: none;
      height: 30px;
    }
  }
`;
