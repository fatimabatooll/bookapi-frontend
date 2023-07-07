import React from 'react'
import axios from 'axios'

const DeleteBookButton = ({bookId, onDelete}) => {
    const handleDelete = async () => {
        try{
            await axios.delete(`http://localhost:8080/books/delete/${bookId}`)
            onDelete();
            alert('Book deleted sucessfully')
        }catch(error){
           console.error(error);
           alert('Failed to delete book')
        }  
    }
  return (
    <button className='.delete-book-button' onClick={handleDelete}>Delete</button>
  )
}

export default DeleteBookButton