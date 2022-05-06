import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function EntryForm() {
  const [content, setContent] = useState('');
  const { user } = useUser();

  return (
    <div>
      {' '}
      EntryForm
      <form>
        <textarea
          id="content"
          name="content"
          aria-label="add a new entry to the guestbook"
          required
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <button aria-label="add an entry" type="submit">
          Add Entry
        </button>
      </form>
    </div>
  );
}
