import React from "react";
import { useNavigate } from "react-router-dom";
import { CSurfer } from "../CSurfer/CSurfer";
import "./Header.css"

export const Header = () => {
  const navigate = useNavigate(); //hook to use navigate function

  return (
    <>
      <div className="flex justify-space-between outline">
        <div onClick={() => navigate("/login")}> Login </div>
        <CSurfer path="/register" content="Register" />
        <CSurfer path="/books" content="Books" />
        <CSurfer path="/users" content="Users" />
        <CSurfer path="/profile" content="Profile" />
      </div>
    </>
  );
};
