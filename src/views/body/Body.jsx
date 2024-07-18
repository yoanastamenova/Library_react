import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Login } from '../../components/Login/Login';
import { Home } from '../home/Home';
import { NotFound } from '../NotFound/NotFound.jsx';

export const Body = () => {
  return (
    <>
       <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
       </Routes>
    </>
  )
}
