import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Ability from './pages/Ability';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/ability" component={Ability}></Route>
    </Switch>
  );
};

export default Routes;
