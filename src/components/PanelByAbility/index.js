import React from 'react';
import {
  Container,
  Panel,
  InfoAbility,
  LabelName,
  ResultName,
  Abilitys,
} from './styles';

const PanelByAbility = ({ ability }) => {
  return (
    <Container>
      <Panel>
        <InfoAbility>
          <LabelName>Habilidade:</LabelName>
          <ResultName>{ability.name}</ResultName>
        </InfoAbility>
        <Abilitys>
          Pokemons que usam essa habilidade:
          <div>
            <div>
              {ability.pokemon
                ? ability.pokemon.map((poke) => (
                    <div>
                      Pokemon: <small>{poke.pokemon.name}</small>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </Abilitys>
      </Panel>
    </Container>
  );
};

export default PanelByAbility;
