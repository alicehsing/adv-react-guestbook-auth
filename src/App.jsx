import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './views/Header';
import Home from './views/Home';
import Guestbook from './views/Guestbook';
import Authentication from './views/Authentication';
import styles from './App.css';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Authentication />
        </Route>
        <PrivateRoute path="/guestbook">
          <Header />
          <Guestbook />
        </PrivateRoute>
      </Switch>
    </main>
  );
}
