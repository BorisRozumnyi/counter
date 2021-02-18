import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from './Components/Container';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/page1">
            <h1>page1</h1>
          </Route>
          <Route path="/page2">
            <h1>page2</h1>
          </Route>
          <Redirect to="/page1" />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
