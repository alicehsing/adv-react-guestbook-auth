import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useLocation, useHistory } from 'react-router-dom';
import styles from '../App.css';

export default function Authentication() {
  // track form state of email and password
  const { login, signup } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleSignIn = async (event) => {
    try {
      event.preventDefault();
      await login(email, password);

      const urlToGoTo = location.search.from ? location.search.pathname : '/';
      // replace stored path history '/login' with '/'
      history.replace(urlToGoTo);
      // history.push('/guestbook');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (event) => {
    try {
      event.preventDefault();
      await signup(email, password);
      const urlToGoTo = location.search.from ? location.search.pathname : '/';
      history.replace(urlToGoTo);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className={styles.authentication}>
        <div className={styles.left}>
          <h3>Sign In To Your Account</h3>
          <h3>Dont't have an account? Sign Up!</h3>
          <form onSubmit={handleSignIn} className={styles.auth}>
            <label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <label>
              <button onClick={handleSignIn}>Sign In</button>
              <button onClick={handleSignUp}>Sign Up</button>
            </label>
          </form>
          <p className={styles.error}>{error}</p>
        </div>
      </div>
    </>
  );
}
