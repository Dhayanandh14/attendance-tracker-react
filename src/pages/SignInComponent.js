import React, {useRef } from 'react'
import UserService from '../Services/UserService';
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from 'react';
import './SignInComponent.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Forminput from '../components/FormInput';


const SignInComponent=()=>{

 const [signInFormValues,setSigninFormValues] = useState({
  email:"",
  password:""
 })
 const formInputValuesHandler = (e) => {
  setSigninFormValues({...signInFormValues, [e.target.name]: e.target.value })
}
  const [cookies, setCookie] = useCookies(["user"]);
  const history = useHistory();
  const signIn= (event) =>{
    // const enteredEmail = emailInputRef.current.value;
    // const enteredPassword = passwordInputRef.current.value;
    event.preventDefault();
    UserService.getUserByEmailandPassword(signInFormValues.email,signInFormValues.password).then((res) => {
      if(res.data){
        authentication(res.data)
      }
      else{
        alert("invalid Credentails")
        return
      }
    });


    function authentication(user) {
      console.log(typeof user);
      if(user){
        alert("DONE")
      }
      else{
        alert("invalid credentials")
      }
    }
  }
  return (
    <div className="container" >
    <form className="form-group" id="signin-form" onSubmit={signIn}>
    <h1 style={{position:"relative",top:'159px',left:"103px",display:"inline-block",margin:"0px"}}>SIGN IN</h1>
    <div className="mb-3 " style={{marginTop:"13pc"}}>
    <label htmlFor="useremail" className="form-label">Email address</label>
   <Forminput type="email" id="useremail" name="email" onChange={formInputValuesHandler}/>

  </div>
  <div className="mb-3 ">
    <label htmlFor="password" className="form-label">Password</label>
    <Forminput type="password" id="password" name="password" onChange={formInputValuesHandler}/>
  </div>
        <div className="mb-3 " >
          <button type="submit" style={{width:"100%"}} className="btn btn-primary" onClick={signIn}>SIGN IN</button>
      </div>
    <span className="input-group-btn">

      <Link to="/signup">Create Account</Link>
    </span>
    </form>


    </div>
  )



}
export default SignInComponent;










// import React, {useRef } from 'react'
// import UserService from '../Services/UserService';
// import { useHistory } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import './SignInComponent.css'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';


// const SignInComponent=()=>{

//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();
//   const [cookies, setCookie] = useCookies(["user"]);
//   const history = useHistory();

//   var CryptoJS = require("crypto-js");
//   const signIn= (event) =>{
//     const enteredEmail = emailInputRef.current.value
//     event.preventDefault();
//     UserService.getUserByEmail(enteredEmail).then((res) => {
//       console.log(res.data)
//       if(res.data){
//         authentication(res.data)
//       }
//       else{
//         alert("invalid Email address")
//         return
//       }
//     });

//     function authentication(user) {
//       console.log(user);
//       let email = user.user_email;
//       let password = user.password;
//       console.log(password)

//       let decryptedPassword = CryptoJS.AES.decrypt(password, "secret key 123");
//       let decryptedPasswordString= decryptedPassword.toString(CryptoJS.enc.Utf8);
//       console.log(decryptedPasswordString)
//       if (email === emailInputRef.current.value && passwordInputRef.current.value === decryptedPasswordString){
//         // setCookie("user", `naHQH1tyeG%2ByD%2B0Nnfx40qLD6X5lQ32dQ4l9WZyzW%2BqosdPtyHs1qwJNz1RHwrDjMmrWDAr1iIvmH533yyHHQpix0RCbbSbOaSL%2Bo43uMjp%2BcC5NaYuOjrfxgN9J6PHMin1RA2l0en%2Fswmm858solXOSgq0IPVngIiorln3o6ysrrrpUqWXoC6PAgKGeWRKxsQE0mJQBaBJ8rWzK%2BVomMrt6Dn1lxIZG7uM1Jj%2Bn0IQNIWDnf77HD2tzr52%2BmA7mff7jkwYslfvsw1aUvwi4Z83urPoUFLruCPCbnj2B5bVvIzyYX%2Fqb2TuTB95II%2FrZdcrV50WqZNmBsrOw0SQs6k8%3D--LKLs3rXIB7WKY4%2Bu--hkP9prmzWQcxeEovm%2BElyw%3D%3D`, {
//         //   path: "/"
//         // });
//         history.replace("/dashboard");
//         // window.location.replace("/dashboard")
//       }
//       else{
//         alert("Please enter a valid  password")
//       }
//     }
//   }
//   return (
//     <div className="container" >
//     <form className="form-group" id="signin-form" onSubmit={signIn}>
//     <h1 style={{position:"relative",top:'159px',left:"103px",display:"inline-block",margin:"0px"}}>SIGN IN</h1>
//     <div className="mb-3 " style={{marginTop:"13pc"}}>
//     <label htmlFor="useremail" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="useremail" aria-describedby="useremail-help" ref={emailInputRef} required/>
//   </div>
//   <div className="mb-3 ">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control" id="password"  ref={passwordInputRef} required/>
//   </div>
//         <div className="mb-3 " >
//           <button type="submit" style={{width:"100%"}} className="btn btn-primary">SIGN IN</button>
//       </div>
//     <span className="input-group-btn">

//       <Link to="/signup">Create Account</Link>
//     </span>
//     </form>


//     </div>
//   )



// }
// export default SignInComponent;
