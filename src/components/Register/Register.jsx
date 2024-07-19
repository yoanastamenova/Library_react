import React from "react";
import { useState } from "react";
import { registerUser } from "../../services/apiCalls";

export const Register = () => {
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
  async function register() {
    try {
      console.log(credentials);

      const response = await registerUser(credentials); // guarda la repsuesta en una variale
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Register</h1>
      <div>
        {/* <label htmlFor="email">Email </label> */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        {/* <label htmlFor="password">Password </label> */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <input type="button" value="Register" onClick={register} />
    </>
  );
};
