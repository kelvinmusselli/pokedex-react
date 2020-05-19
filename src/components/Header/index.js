import React from 'react';
import { Link } from 'react-router-dom';
import ButtonMenu from '../ButtonMenu';
import Pokeball from '../../assets/pokeball.png';
import { Container, Logo } from './styles';

const Header = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <Logo src={Pokeball} />
        </Link>
      </Container>
      <ButtonMenu></ButtonMenu>
    </>
  );
};

export default Header;
