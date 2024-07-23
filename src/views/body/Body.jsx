import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Login } from '../../components/Login/Login';
import { Home } from '../home/Home';
import { NotFound } from '../NotFound/NotFound.jsx';
import { Register } from '../../components/Register/Register.jsx';
import { Service } from '../../components/Service/Service.jsx';
import { User } from '../../components/Users/User.jsx';
import { Books } from '../Books/Books.jsx';
import { Profile } from '../profile/Profile.jsx';

export const Body = () => {
  return (
    <>
       <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/services' element={<Service />}/>
        <Route path='/users' element={<User />}/>
        <Route path='/books' element={<Books />}/>
        <Route path='/profile' element={<Profile />}/>
       </Routes>
    </>
  )
}
