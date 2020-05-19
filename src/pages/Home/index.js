import React from 'react';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <h1>Pokedex - React</h1>
      <div></div>
      <div>
        <button>Anterior</button>
        <button>Próxima</button>
      </div>
    </Container>
  );
};

export default Home;
