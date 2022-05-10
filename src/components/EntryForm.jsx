import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { createEntry } from '../services/entries';
import styles from '../App.css';

export default function EntryForm({ AddEntry }) {
  const [content, setContent] = useState('');
  const { user } = useUser();

  const handleAddEntry = async (event) => {
    event.preventDefault();
    const newEntry = await createEntry({ userId: user.id, content });

    AddEntry(newEntry);
    setContent('');
  };

  return (
    <div>
      <form onSubmit={handleAddEntry} className={styles.entry_form}>
        <textarea
          id="content"
          name="content"
          aria-label="add a new entry to the guestbook"
          required
          value={content}
          onChange={({ target }) => setContent(target.value)}
          placeholder="Content"
          className={styles.entry_text}
        />
        <button
          aria-label="add an entry"
          type="submit"
          onClick={handleAddEntry}
        >
          Add Entry
        </button>
      </form>
    </div>
  );
}
