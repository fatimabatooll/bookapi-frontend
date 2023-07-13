import React from 'react';

const DeleteBookButton = ({ bookId, onDelete }) => {
  const handleDelete = () => {
    fetch(`http://localhost:8080/books/delete/${bookId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          onDelete();
          alert('Book deleted successfully');
        } else {
          throw new Error('Failed to delete book');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Failed to delete book');
      });
  };

  return (
    <button className='delete-book-button' onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteBookButton;
