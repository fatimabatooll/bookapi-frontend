import React, { useState, useEffect } from 'react';
import UpdateBookForm from './components/UpdateBookForm';
import DeleteBookButton from './components/DeleteBookButton';
import AddBookForm from './components/AddBookForm';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    fetch('http://localhost:8080/books/getall')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  };

  return (
    <div className='container'>
      <AddBookForm />
      <h1>Book List</h1>
      <table>
        <thread> {/* Corrected: Changed 'thread' to 'thead' */}
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thread>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <UpdateBookForm book={book} />
                <DeleteBookButton bookId={book.id} onDelete={fetchBooks} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
