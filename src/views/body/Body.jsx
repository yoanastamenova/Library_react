import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Login } from '../../components/Login/Login';
import { Home } from '../home/Home';
import { NotFound } from '../NotFound/NotFound.jsx';
import { Register } from '../../components/Register/Register.jsx';
import { Service } from '../../components/Service/Service.jsx';
import { Books } from '../Books/Books.jsx';
import { Profile } from '../profile/Profile.jsx';
import { AllUsers } from '../Admin/AllUsers/AllUsers.jsx';


export const Body = () => {
  const passport = JSON.parse(localStorage.getItem("passport"));
  let role = null
  if (passport) {
    role = passport.tokenData.role;
  }

  return (
    <>
       <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/books' element={<Books />}/>
        <Route path='/profile' element={<Profile />}/>
        { role === 'admin'  && 
        <Route path='/admin' element={<AllUsers />}/>
        }
        </Routes>
    </>
  )
}
