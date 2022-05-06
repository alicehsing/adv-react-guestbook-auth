import React from 'react';

export default function Entry({ content, author, time }) {
  return (
    <>
      <div>
        <h3>{content}</h3>
        <p>{author}</p>
        <p>on {new Date(time).toLocaleString('en-US')}</p>
      </div>
    </>
  );
}
