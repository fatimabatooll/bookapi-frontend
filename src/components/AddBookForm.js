import React, { useState } from 'react';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/books/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author }),
    })
      .then(response => {
        if (response.ok) {
          alert('Book added successfully');
          setTitle('');
          setAuthor('');
        } else {
          throw new Error('Failed to add book');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Failed to add book');
      });
  };

  return (
    <div className='add-book-form'>
      <h1>AddBookForm</h1>
      <form onSubmit={handleSubmit}>
      <div>
  <label htmlFor="title-input">Title: </label>
  <input
    id="title-input"
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
</div>
<div>
  <label htmlFor="author-input">Author: </label>
  <input
    id="author-input"
    type="text"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
  />
</div>

        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddBookForm;
