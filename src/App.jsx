import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './views/Header';
import Home from './views/Home';
import List from './views/List';
import Login from './views/Login';
import styles from './App.css';

export default function App() {
  return (
    <main className={styles.main}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
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
