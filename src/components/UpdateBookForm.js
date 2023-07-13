import React, { useState } from 'react';

const UpdateBookForm = ({ book }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [showForm, setShowForm] = useState(false); // State variable to control form visibility

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/books/update/${book.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        author,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('Book updated successfully');
          setShowForm(false); // Close the form after the update
        } else {
          throw new Error('Failed to update book');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Failed to update book');
      });
  };

  const handleUpdateClick = () => {
    setShowForm(true); // Show the form when the "Update" button is clicked
  };

  return (
    <div className="update-book-form">
      <h2>Update Book</h2>
      {!showForm ? (
        <button onClick={handleUpdateClick}>Update</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UpdateBookForm;
