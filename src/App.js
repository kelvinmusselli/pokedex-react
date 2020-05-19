import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  );
};
export default App;
