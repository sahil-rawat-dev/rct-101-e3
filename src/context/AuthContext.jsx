import React, { createContext, useState,useEffect} from "react";
import axios from "axios";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setAuth]=useState("")
 
  const logout=()=>{

  }

  return <AuthContext.Provider value={{isAuth,logout}}>{children}</AuthContext.Provider>;
};
