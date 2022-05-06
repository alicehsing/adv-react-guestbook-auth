import React from 'react';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/user';

export default function Header() {
  const { user, setUser, logout } = useUser();

  const handleSignOut = async () => {
    setUser('');
    await signOutUser();
  };

  return (
    <>
      <h1>Header</h1>
      <button onClick={logout}>Sign Out</button>
      {/* <button onClick={handleSignOut}>Sign Out</button> */}
    </>
  );
}
