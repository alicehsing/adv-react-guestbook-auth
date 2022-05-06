import React from 'react';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/user';
import styles from '../App.css';

export default function Header() {
  const { user, setUser, logout } = useUser();
  console.log('**USER**', user);

  const handleSignOut = async () => {
    setUser('');
    await signOutUser();
  };

  return (
    <>
      <div className={styles.header}>
        <h1>My Digital Guest Book</h1>
        <h2>Save your story. Turn the pages.</h2>
        <button onClick={logout}>Sign Out</button>
        <p>Signed in as {user.email} </p>
        {/* <button onClick={handleSignOut}>Sign Out</button> */}
      </div>
      <hr></hr>
    </>
  );
}
