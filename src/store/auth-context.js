import React,{useState} from 'react'
let a = false;
const AuthContext = React.createContext({
  token:'',
  isLoggedIn:a,
  login:(token)=>{
    localStorage.setItem('token',token)
},
  logout:()=>{
    localStorage.removeItem('token')
  }
});
console.log("a",a)
export const AuthContextProvider = (props)=>{
  // const initailToken = localStorage.getItem('token')
  // console.log(initailToken)
console.log(a)
  const userIsLoggedIn = !!false;
  //  const logoutHandler=()=>{
  //    localStorage.removeItem('user_cookie')
  //  }

   const contextValue={
     token:"",
     isLoggedIn:a
   }
  return <AuthContextProvider value={contextValue}>
    {props.children}
  </AuthContextProvider>
}
export default AuthContext;
