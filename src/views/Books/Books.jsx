import React, { useEffect, useState } from 'react';
import { CCard } from '../../components/CCard/CCard';

export const Books = () => {
  const [books, setBooks] = useState([])
  const token = localStorage
    useEffect( () => {
        console.log('UseEffect');
        fetch('http://localhost:4000/books')
        .then((res) => {
          console.log(res);
            return res.json();
        })
        .then((res) => {
          setBooks(res.data)
            console.log(res);
        })
        .catch((e)=> {
          console.log(e)
        })
    }
  , [])
  return (
		<>
    <p>Bienvenido, {token}</p>
			{books.map((book, index) => (
        <CCard key={index} name={book.title} description={book.description}/>
			))}
		</>
	);
}
