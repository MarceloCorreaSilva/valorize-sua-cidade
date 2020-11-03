import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Highlighters from './pages/Admin/Highlighters';
import Highlighter from './pages/Admin/Highlighter';
import Producers from './pages/Admin/Producers';
import Producer from './pages/Admin/Producer';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/valorize-sua-cidade" component={Home} exact />
        <Route path="/admin" component={Highlighters} exact />
        <Route path="/admin/marcadores" component={Highlighters} exact />
        <Route path="/admin/marcadores/:id" component={Highlighter} exact />
        <Route path="/admin/produtores" component={Producers} exact />
        <Route path="/admin/produtores/:id" component={Producer} exact />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
