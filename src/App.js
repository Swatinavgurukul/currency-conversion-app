import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Home from './HomePage';
import Currency from './Currency'
import history from './history';


const App = () => {

  return (
    <SnackbarProvider maxSnack={1} >
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route exact path="/currency" component={Currency} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;