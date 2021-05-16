import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Anuncio from './pages/Anuncio';
import Landing from './pages/Landing';
import CreateAnuncio from './pages/CreateAnuncio';

export default function routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/anuncios/create" exact component={CreateAnuncio}/>
        <Route path="/anuncios/:id" exact component={Anuncio}/>
      </Switch>
    </BrowserRouter>
  );
}
