import React, { useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import PanelByAbility from 'components/PanelByAbility';

const FormAbility = () => {
  const [search, setSearch] = useState('');
  const [getAbility, setAbility] = useState([]);

  const handleButton = async () => {
    const resultSearch = search;
    const hasAbility = await api.get(`/ability/${resultSearch}`);
    if (hasAbility) {
      return setAbility(hasAbility.data);
    }
  };

  return (
    <Container>
      <h2>Busque uma habilidade</h2>
      <input
        type="text"
        placeholder="Busque uma habilidade"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => handleButton()}>Buscar</button>
      <PanelByAbility ability={getAbility} />
    </Container>
  );
};

export default FormAbility;
