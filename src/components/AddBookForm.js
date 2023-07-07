import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')

    const handleSubmit = async (event) => {
     event.preventDefault();

     try{
        await axios.post('http://localhost:8080/books/add', {title, author});
        alert('Book added sucessfully')
        setTitle('')
        setAuthor('')
     }catch(error){
        console.log(error)
        alert('failed to add books')
     }
    }
  return (
    <div className='add-book-form'>
        <h1>AddBookForm</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Title: </label>
            <input 
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label>Author: </label>
            <input 
                type='text'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
        </div>
         <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddBookForm