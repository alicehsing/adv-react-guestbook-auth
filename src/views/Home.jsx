import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css';

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <h1>My Digital Guest Book</h1>
        <h2>Save your story. Turn the pages.</h2>
        <Link to="/guestbook" className={styles.startbtn}>
          Start Writing in Guestbook!
        </Link>
      </main>
    </>
  );
}
