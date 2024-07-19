import React, { useEffect, useState } from 'react';


export const Books = () => {
  const [books, setBooks] = useState([])
    useEffect( () => {
        console.log('UseEffect');

        fetch('http://localhost:4000/books')
        .then(res => {
            return res.json();
        })
        .then(res => {
          setBooks(res.data)
            console.log(res);
        })
        .catch(e => {
          console.log(e);
        })
    }
  , [])
  return (
		<>
			{books.map((book) => (
        <div key={book.id} className="card">
          <h1> {book.title} </h1>
				  <p> { book.description }</p>
        </div>
			))}
		</>
	);
}
