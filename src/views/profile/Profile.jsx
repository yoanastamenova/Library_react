import React, { useState } from 'react';
import { CInput } from '../../components/CInput/CInput';

export const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: "",
        isActive: null,
        createdAt: "",
        updatedAt: "",

    })
    const logout = () => {
        console.log("Byeeee")
        localStorage.removeItem("passport")
    }

    const passport = JSON.parse(localStorage.getItem("passport"));
    const token = passport.token;
  
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
