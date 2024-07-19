import React from "react";
import { useNavigate } from "react-router-dom";
import { CSurfer } from "../CSurfer/CSurfer";

export const Header = () => {
  const navigate = useNavigate(); //hook to use navigate function

  return (
    <>
      <div className="flex justify-space-between">
        <div onClick={() => navigate("/login")}> Login </div>
        <CSurfer path="/register" content="Register" />
        <CSurfer path="/books" content="Books" />
        <CSurfer path="/users" content="Users" />
      </div>
    </>
  );
};
