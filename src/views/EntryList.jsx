import { useState, useEffect } from 'react';
import Entry from '../components/Entry';
import EntryForm from '../components/EntryForm';
import { useUser } from '../context/UserContext';
import { getEntries } from '../services/entries';

export default function EntryList() {
  const [entries, setEntries] = useState([]);
  const { user } = useUser();

  const fetchEntries = async () => {
    const entry = await getEntries();
    setEntries(entry);
  };

  // set useEffect, on load, fetch all entries stored in supabase
  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    // pass down fetchEntries, entry content, author, and time created as components
    <>
      <EntryForm AddEntry={fetchEntries} />
      <h2>Your Entries </h2>
      <ul>
        {entries.length ? (
          entries.map(({ id, content, created_at }) => {
            return (
              <li key={id}>
                <Entry
                  content={content}
                  author={user.email}
                  time={created_at}
                />
              </li>
            );
          })
        ) : (
          <p>Nothing has been written in this guestbook yet!</p>
        )}
      </ul>
    </>
  );
}
