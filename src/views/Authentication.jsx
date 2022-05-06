import { useState } from 'react';
import { useUser } from '../context/UserContext';
import styles from '../App.css';
import { useLocation, useHistory } from 'react-router-dom';

export default function Authentication() {
  // track form state of email and password
  const { login, signup, logout } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory;

  // const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = async () => {
    const user = await signUpUser(email, password);
  };

  const handleSignIn = async (event) => {
    try {
      event.preventDefault();
      await login(email, password);
      history.push('/guestbook');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className={styles.authentication}>
        <div className={styles.left}>
          <h1>Sign In To Your Account</h1>
          <form className={styles.auth}>
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
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>Don't have an account?</h1>
          <form className={styles.auth}>
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
            <button type="submit">Sign Up</button>
            <p>{error}</p>
          </form>
        </div>
      </div>
    </>
  );
}
