import React, { useEffect } from "react";
import { useState } from "react";
import { CInput } from "../CInput/CInput";
import { loginUser } from "../../services/apiCalls";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("HandleChange");
    setCredentials((prevState) => ({
      //prev State gets the initial value of the credentials variable
      ...prevState,
      [e.target.name]: e.target.value, //la propiedad [] es dinamica
    }));
  };


   const login = async () => {
    console.log("Login");
    console.log(credentials);
    try {
      const response = await loginUser(credentials)
      if (response.success) {
        const decodedToken = jwtDecode(response.token)
        console.log(decodedToken)
        const passport = {
          token: response.token,
          tokenData: decodedToken
        }
        localStorage.setItem("passport", JSON.stringify(passport))
        navigate('/profile');  
      } else {
        alert(response.message)
      }
      if(response.success){
        navigate('/login')
      }  else {
        alert(response.message)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <div>
        {/* <label htmlFor="email">Email </label> */}
        {/* <input type="email" name="email" placeholder="Email" onChange={handleChange}/> */}
        <CInput
          type="email"
          name="email"
          placeholder="Email"
          emitFunction={handleChange}
        />
      </div>
      <div>
        {/* <label htmlFor="password">Password </label> */}
        {/* <input type="password" name="password" placeholder="Password" onChange={handleChange}/> */}
        <CInput
          type="password"
          name="password"
          placeholder="Password"
          emitFunction={handleChange}
        />
      </div>
      {/* <input type="button" value="Login" onClick={login}/> */}
      <CInput
        type="button"
        name="button"
        value="login"
        placeholder="Login"
        clickFunction={login}
      />
    </>
  );
};
