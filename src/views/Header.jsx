import React from 'react';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/user';
import styles from '../App.css';
import guestbook from '../assets/guestbook_icon.png';

export default function Header() {
  const { user, setUser, logout } = useUser();

  const handleSignOut = async () => {
    setUser('');
    await signOutUser();
  };

  return (
    <>
      <div className={styles.header}>
        <img alt="guestbook" src={guestbook} />

        <div className={styles.signInSignOut}>
          <p>Signed in as {user.email} </p>
          <button onClick={logout}>Sign Out</button>
        </div>

        {/* <button onClick={handleSignOut}>Sign Out</button> */}
      </div>
      <hr></hr>
    </>
  );
}
