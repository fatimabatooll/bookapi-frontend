import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateBookForm from './components/UpdateBookForm';
import DeleteBookButton from './components/DeleteBookButton';
import AddBookForm from './components/AddBookForm';
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks();
  }, [books]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/books/getall');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
   <div className='container'>
   <AddBookForm/>
    <h1>Book List</h1>
    <table>
      <thread>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
        <tbody>
          {
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <UpdateBookForm book={book}/>
                  <DeleteBookButton bookId={book.id} onDelete={fetchBooks}/>
                  
                </td>
              </tr>
            ))
          }
        </tbody>
      </thread>
    </table>
    
   </div>
  );
}

export default App;
