import React from 'react';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/user';

export default function Header() {
  const { user, setUser } = useUser();

  const handleSignOut = async () => {
    setUser('');
    await signOutUser();
  };

  return (
    <>
      <h1>Header</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
}
