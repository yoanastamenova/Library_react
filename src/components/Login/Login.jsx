import React from "react";
import { useState } from "react";
import { CInput } from "../CInput/CInput";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("HandleChange");
    setCredentials((prevState) => ({
      //prev State gets the initial value of the credentials variable
      ...prevState,
      [e.target.name]: e.target.value, //la propiedad [] es dinamica
    }));
  };
  const login = () => {
    console.log("Login");
    console.log(credentials);
  };
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
        placeholder="Login"
        value="login"
        clickFunction={login}
      />
    </>
  );
};
