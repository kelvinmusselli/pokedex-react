import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Container, ButtonsMenu, ButtonNameId, ButtonAbility } from './styles';

const ButtonMenu = () => {
  return (
    <Container>
      <ButtonsMenu>
        <Link to="/search">
          <ButtonNameId>Buscar por nome</ButtonNameId>
        </Link>
        <Link to="/ability">
          <ButtonAbility>Buscar habilidade</ButtonAbility>
        </Link>
      </ButtonsMenu>
    </Container>
  );
};

export default withRouter(ButtonMenu);
