import React from 'react';

export default function Entry({ content, author, time }) {
  return (
    <>
      <h3>{content}</h3>
      <p>{author}</p>
      <p>on {time}</p>
    </>
  );
}
