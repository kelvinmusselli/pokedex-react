import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Panel = styled.div`
  width: 100%;
`;

export const InfoPokemon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4px;
`;

export const LabelName = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const ResultName = styled.span`
  font-size: 14px;
  margin-left: 4px;
`;

export const TypePokemon = styled.div``;
export const Abilitys = styled.div``;
export const ItemsAbilitys = styled.div`
  border: 1px solid;
  border-radius: 4px;
  padding: 4px;
  background: #ff3737;
  div {
    color: #fff;
    margin-top: 2px;
    font-weight: bold;
    margin-bottom: 2px;
  }
`;
export const Ability = styled.div``;
export const PhotoPokemon = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
`;
export const ImgPoke = styled.img`
  height: 100px;
`;
