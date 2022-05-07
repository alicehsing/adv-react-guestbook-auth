import React from 'react';
import { useUser } from '../context/UserContext';
import styles from '../App.css';
import guestbook from '../assets/guestbook_icon.png';

export default function Header() {
  const { user, logout } = useUser();

  return (
    <>
      <div className={styles.header}>
        <img alt="guestbook" src={guestbook} />
        <div className={styles.signInSignOut}>
          <p>Signed in as {user.email} </p>
          <button onClick={logout}>Sign Out</button>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
