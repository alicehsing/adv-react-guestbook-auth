import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './views/Header';
import Home from './views/Home';
import List from './views/List';
import Authentication from './views/Authentication';
import styles from './App.css';

export default function App() {
  return (
    <main className={styles.main}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Authentication />
          </Route>
          <Route path="/guestbook">
            <Header />
            <List />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
