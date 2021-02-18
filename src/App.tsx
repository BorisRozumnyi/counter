import React from 'react';
import './App.css';
import { Container } from './Components/Container';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Header } from './Components/Header';
import { frontendUrls } from './routes/frontendUrls';

export const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={frontendUrls.about}>
            <h1>page1</h1>
          </Route>
          <Route path={frontendUrls.counter}>
            <h1>page2</h1>
          </Route>
          <Redirect to={frontendUrls.about} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
