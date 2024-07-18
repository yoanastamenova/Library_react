import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Login } from '../../components/Login/Login';
import { Home } from '../home/Home';
import { NotFound } from '../NotFound/NotFound.jsx';
import { Register } from '../../components/Register/Register.jsx';
import { Service } from '../../components/Service/Service.jsx';
import { User } from '../../components/Users/User.jsx';

export const Body = () => {
  return (
    <>
       <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/services' element={<Service />}/>
        <Route path='/users' element={<User />}/>
       </Routes>
    </>
  )
}
