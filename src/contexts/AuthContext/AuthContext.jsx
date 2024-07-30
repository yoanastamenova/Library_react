import React, { createContext, useContext } from 'react'

// create a context with the method createContext()
const AuthContext = createContext({children})

//create the provider of the context and pass the children to it (<ContextProvider> coming from the html)
export const AuthProvider = ({ children }) => {

    //prepare all the logic and the initial state of the context
        
    //returning the Context.Provider and pass the value of the information we need
  return (
    <AuthContext.Provider value={{token, isLoggedin, isAdmin, setSessionData, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext)
}