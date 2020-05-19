import React from 'react';
import {
  Container,
  Panel,
  InfoPokemon,
  LabelName,
  ResultName,
  Abilitys,
  PhotoPokemon,
  ImgPoke,
  ItemsAbilitys,
  Ability,
} from './styles';

const PanelSearch = ({ pokemon }) => {
  return (
    <Container>
      <Panel>
        <InfoPokemon>
          <LabelName>Nome: </LabelName>
          <ResultName>{pokemon.name}</ResultName>
        </InfoPokemon>
        <Abilitys>
          <h3>Habilidades: </h3>
          <ItemsAbilitys>
            {pokemon.abilities
              ? pokemon.abilities.map((ability, index) => (
                  <Ability key={index}>{ability.ability.name}</Ability>
                ))
              : null}
          </ItemsAbilitys>
        </Abilitys>
        <PhotoPokemon>
          {pokemon.sprites ? (
            <ImgPoke src={pokemon.sprites.front_default} alt={pokemon.name} />
          ) : null}
        </PhotoPokemon>
      </Panel>
    </Container>
  );
};

export default PanelSearch;
