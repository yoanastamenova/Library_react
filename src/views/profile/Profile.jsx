import React, { useEffect, useState } from "react";
import { CInput } from "../../components/CInput/CInput";
import { useNavigate } from "react-router-dom";
import { profile } from "../../services/apiCalls";

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    is_active: null,
    created_at: "",
    updated_at: "",
  });
  const passport = JSON.parse(localStorage.getItem("passport"));
  let token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } 
    else {
      const bringProfile = async () => {
        const response = await profile(passport.token);
        setProfileData(response.data)
        console.log(response)
      }
      bringProfile()
    }
  }, []);

  const logout = () => {
    console.log("Byeeee");
    localStorage.removeItem("passport");
  };

  //if(passport)
  return (
    <>
      <h2>Profile info</h2>
      <p>Name: {profileData.name}</p>
      <p>Active:{profileData.is_active ? "Yes" : "No"}</p>
      <p>Created At:{profileData.created_at}</p>
      <p>Updated At:{profileData.updated_at}</p>
      <CInput type="button" value="Logout" clickFunction={logout}></CInput>
    </>
  );
};
