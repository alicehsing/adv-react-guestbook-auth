import React from 'react';
import styles from '../App.css';
import guestbook from '../assets/guestbook_icon.png';

export default function Authentication() {
  return (
    <>
      <div className={styles.authentication}>
        <div className={styles.left}>
          <h1>Create an Account</h1>
          <form className={styles.auth}>
            <label>
              <input id="email" name="email" type="email" placeholder="Email" />
            </label>
            <label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <button type="button">Sign In</button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>Don't have an account?</h1>
          <form className={styles.auth}>
            <label>
              <input id="email" name="email" type="email" placeholder="Email" />
            </label>
            <label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <button type="button">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}
