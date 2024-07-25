import React from "react";
import { useNavigate } from "react-router-dom";
import { CSurfer } from "../CSurfer/CSurfer";
import "./Header.css"

export const Header = () => {
  const navigate = useNavigate(); //hook to use navigate function

  const passport = JSON.parse(localStorage.getItem("passport"))
  let token;
  if( passport) {
    token = passport.token
  }

  return (
    <>
      <div className="flex justify-space-between">
        <CSurfer path="/" content="Home" />
        <CSurfer path="/books" content="Books" />
        {token ? (
          <>
            <div onClick={() => localStorage.removeItem("passport") && navigate(-1)}> LOGOUT </div>
            <CSurfer path="/profile" content="Profile" />
          </>
        ) : (
          <>
            <div onClick={() => navigate("/login")}> Login </div>
            <CSurfer path="/register" content="Register" />
          </>
        )}
      </div>
    </>
  );
};
