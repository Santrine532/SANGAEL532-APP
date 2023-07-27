import {useState, useContext, createContext, useSyncExternalStore } from "react";
import { useActionData, useSubmit } from "react-router-dom";

const AuthCotext =createContext(null)


export const AuthProvider = ({children}) =>{
cost [user, setUser] =useState(null)

const login = user => {
    setUser(user)
}
const logout = user => {
    setUser(user)
}
return ( 
<AuthCotext.Provider value={{user,login,logout}}>{children}
</AuthCotext.Provider>
)
}
export const useAuth =() => {
    return useContext(AuthCotext)
}