import React, { useEffect, useState } from 'react';
import { CInput } from '../../components/CInput/CInput';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: "",
        isActive: null,
        createdAt: "",
        updatedAt: "",

    })
    const passport = JSON.parse(localStorage.getItem("passport"));
    let token;
    const navigate = useNavigate()

    useEffect(() => {
        if(!passport){
            navigate('/login')
     } else { token = passport.token; }
    }, [
        
    ])

    const logout = () => {
        console.log("Byeeee")
        localStorage.removeItem("passport")
    }
  
        //if(passport)
    return (
    <>
    <h2>Profile info</h2>
    <p>Name: {profileData.name}</p>
    <p>Active:{profileData.isActive}</p>
    <p>Created At:{profileData.createdAt}</p>
    <p>Updated At:{profileData.updatedAt}</p>
    <CInput type="button" value="Logout" clickFunction={logout}></CInput>
    </>
  )
}
