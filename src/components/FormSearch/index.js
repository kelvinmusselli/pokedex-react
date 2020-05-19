import React, { useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import PanelSearch from 'components/PanelSearch';

const FormSearch = () => {
  const [search, setSearch] = useState('');
  const [getPokemon, setPokemon] = useState([]);

  const handleButton = async () => {
    const resultSearch = search;
    const hasPokemon = await api.get(`/pokemon/${resultSearch}`);
    if (hasPokemon) {
      return setPokemon(hasPokemon.data);
    }
  };

  return (
    <Container>
      <h2>Busque um pokemon</h2>
      <input
        type="text"
        placeholder="Busque um pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => handleButton()}>Buscar</button>
      <PanelSearch pokemon={getPokemon} />
    </Container>
  );
};

export default FormSearch;
