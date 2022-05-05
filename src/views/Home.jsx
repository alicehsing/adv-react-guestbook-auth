import React from 'react';
import styles from '../App.css';
import background from '../assets/background.jpg';

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <h1>My Digital Guest Book</h1>
        <h2>Save your story. Turn the pages.</h2>
        <button className={styles.signinbtn}>Sign In | Sign Up</button>
      </main>
    </>
  );
}
