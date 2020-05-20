import React, { useState, useEffect } from 'react';
import {
  Container,
  ListPokemons,
  Pokemons,
  Title,
  DivTitle,
  FormButton,
} from './styles';
import api from '../../services/api';

const Home = () => {
  const [dataPokemons, setListPokemons] = useState([]);
  const [pages, setPages] = useState({ next: null, prev: null });

  useEffect(() => {
    const getPokemons = async () => {
      const data = await api.get('/pokemon');
      if (data) {
        setListPokemons(data.data);
        setPages({ next: data.data.next, prev: data.data.prev });
      }
    };
    getPokemons();
  }, []);
  const nextPage = async () => {
    const data = await api.get(pages.next);
    if (data) {
      setListPokemons(data.data);
      setPages({ next: data.data.next, prev: data.data.prev });
    }
  };
  const prevPage = async () => {
    const data = await api.get(pages.prev);
    if (data) {
      setListPokemons(data.data);
      setPages({ next: data.data.next, prev: data.data.prev });
    }
  };
  return (
    <Container>
      <DivTitle>
        <Title>Pokedex - React</Title>
      </DivTitle>
      <ListPokemons>
        {dataPokemons.results
          ? dataPokemons.results.map((poke, index) => (
              <Pokemons key={index}>{poke.name}</Pokemons>
            ))
          : null}
      </ListPokemons>
      <FormButton>
        <button onClick={() => prevPage()}>Anterior</button>
        <button onClick={() => nextPage()}>Próxima</button>
      </FormButton>
    </Container>
  );
};

export default Home;
