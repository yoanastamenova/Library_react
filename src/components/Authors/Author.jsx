import React from 'react'

export const Author = () => {
    const [ credentials, setCredentials] = useState(
        {
          email: "",
          password: ""
        }
      )
    
      const handleChange = (e) => {
        console.log('HandleChange')
        setCredentials(prevState => (
        {                   //prev State gets the initial value of the credentials variable
          ...prevState,
           [e.target.name]: e.target.value             //la propiedad [] es dinamica
        } 
      ))
      }
    
       const register = () => {
        console.log('Register');
        console.log(credentials)
       }
    
      return (
        <>
          <h1>Register</h1>
          <div>
            {/* <label htmlFor="email">Email </label> */}
            <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
          </div>
          <div>
            {/* <label htmlFor="password">Password </label> */}
            <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange}/>
          </div>
          <input type="button" value="Login" onClick={register}/>
        </>
      );
    }    
