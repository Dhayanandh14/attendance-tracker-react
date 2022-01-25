import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Forminput from '../components/FormInput';
import UserService from '../Services/UserService';
import './SignUpComponent.css';

const SignUpComponent=()=>{
  const [signUpFormValues,setSignUpFormValues] = useState({
    name:"",
    email:"",
    password:""
   })
   const formInputValuesHandler = (e) => {
    setSignUpFormValues({...signUpFormValues, [e.target.name]: e.target.value })
  }

  const signUp =(event)=>{
    const username = signUpFormValues.name;
    const useremail = signUpFormValues.email;
    const password = signUpFormValues.password;
    event.preventDefault()
    UserService.getUserByEmail(useremail).then((res) => {
      console.log(res.data)
      if(res.data === "email exist"){
        alert("Email already exist")
      }
      else{
        authentication(res.data)
      }
    });
    function authentication(user){
        let usernameWithCapitalize = username[0].toUpperCase() + username.slice(1)
        let users = {user_name: usernameWithCapitalize, user_email:useremail, password:password}
        UserService.createUsers(users).then((res=>{
          console.log(res)
        }));
      }
    }
  return<div className="container">

  <form className="form-group" id="signup-form" onSubmit={signUp}>
    <h1 style={{position:"relative",top:'164px',left:"100px",display:"inline-block",margin:"0px"}}>SIGN UP</h1>

    <div class="mb-3 " style={{marginRight:"auto",marginLeft:"auto",marginTop:"13pc"}}>
      <label htmlFor="username" class="form-label">Full name</label>
      <Forminput type="text" id="username" onChange={formInputValuesHandler} name="name"/>
    </div>

    <div class="mb-3 ">
      <label htmlFor="useremail" class="form-label">Email address</label>
      <Forminput type="email" id="useremail" onChange={formInputValuesHandler} name="email"/>
    </div>

    <div class="mb-3 ">
      <label htmlFor="password" class="form-label">Password</label>
      <Forminput type="password" id="password" onChange={formInputValuesHandler}/>
    </div>

    <div class="mb-3 " >
    <button type="submit" style={{width:"100%"}} class="btn btn-primary" onClick={signUp}>SIGN UP</button>
  </div>
    <span className="input-group-btn">
      <Link to="/signin">Login With Existing Account</Link>
    </span>
  </form>

  </div>

}

export default SignUpComponent;





























// // import React, { Component } from 'react'
// import UserService from '../Services/UserService';
// import { useState } from 'react';
// import { useCookies } from "react-cookie";
// import './SignUpComponent.css'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// const SignUpComponent=()=>{

//   const [cookies, setCookie] = useCookies(["user"]);
//   const [username, setusername] = useState("")
//   const [useremail, setuseremail] = useState("")
//   const [password, setpassword] = useState("")

//   const changeNameHandler= (event)=>{
//     setusername(event.target.value)
//   }

//   const changeEmailHandler=(event)=>{
//     setuseremail(event.target.value)
//   }

//   const changePasswordHandler = (event)=>{
//     setpassword(event.target.value)
//   }

//   const signUp =(event)=>{
//     event.preventDefault()

//     UserService.getUserByEmail(useremail,username).then((res) => {
//       console.log(res.data)
//       // authentication(res.data)
//     });
//     // function authentication(user){
//     //   let email = user.user_email;
//     //   let name = user.user_name;
//     //   if(name === username){
//     //     alert('Your email is already exist')
//     //   }else if(email === useremail){
//     //     alert("Your name is already exist")
//     //   }
//     //   else{
//     //     var CryptoJS = require("crypto-js");
//     //     var encryptedPassword = CryptoJS.AES.encrypt(password, 'secret key 123');
//     //     let encryptedPasswordString = encryptedPassword.toString()
//     //     console.log("encrypted text", encryptedPassword.toString());
//     //     let users = {user_name: username,user_email:useremail,password:encryptedPasswordString}
//     //     UserService.createUsers(users).then((res=>{
//     //       console.log(res)
//     //     }));
//     //      setCookie("user", `naHQH1tyeG%2ByD%2B0Nnfx40qLD6X5lQ32dQ4l9WZyzW%2BqosdPtyHs1qwJNz1RHwrDjMmrWDAr1iIvmH533yyHHQpix0RCbbSbOaSL%2Bo43uMjp%2BcC5NaYuOjrfxgN9J6PHMin1RA2l0en%2Fswmm858solXOSgq0IPVngIiorln3o6ysrrrpUqWXoC6PAgKGeWRKxsQE0mJQBaBJ8rWzK%2BVomMrt6Dn1lxIZG7uM1Jj%2Bn0IQNIWDnf77HD2tzr52%2BmA7mff7jkwYslfvsw1aUvwi4Z83urPoUFLruCPCbnj2B5bVvIzyYX%2Fqb2TuTB95II%2FrZdcrV50WqZNmBsrOw0SQs6k8%3D--LKLs3rXIB7WKY4%2Bu--hkP9prmzWQcxeEovm%2BElyw%3D%3D`, {
//     //           path: "/"
//     //         });
//     //       // history.push("/dashboard");
//     //       // window.location.replace("/dashboard")
//     //   }
//     // }



//   }



//   return<div className="container">

//   <form className="form-group" id="signup-form" onSubmit={signUp}>
//     <h1 style={{position:"relative",top:'164px',left:"100px",display:"inline-block",margin:"0px"}}>SIGN UP</h1>
//     <div class="mb-3 " style={{marginRight:"auto",marginLeft:"auto",marginTop:"13pc"}}>
//       <label htmlFor="username" class="form-label">Full name</label>
//       <input type="text" class="form-control" id="username" aria-describedby="username-help" value={username} onChange={changeNameHandler} required/>
//     </div>
//     <div class="mb-3 ">
//       <label htmlFor="useremail" class="form-label">Email address</label>
//       <input type="email" class="form-control" id="useremail" aria-describedby="useremail-help" value={useremail} onChange={changeEmailHandler} required/>
//     </div>
//     <div class="mb-3 ">
//       <label htmlFor="password" class="form-label">Password</label>
//       <input type="password" class="form-control" id="password" value={password} onChange={changePasswordHandler} required/>
//     </div>
//     <div class="mb-3 " >
//     <button type="submit" style={{width:"100%"}} class="btn btn-primary">SIGN UP</button>
//   </div>
//     <span className="input-group-btn">
//       <Link to="/signin">Login With Existing Account</Link>
//     </span>
//   </form>

//   </div>

// }

// export default SignUpComponent;































// export default class SignUpComponent extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       // id: this.props.match.params.id,
//       user_name: '',
//       user_email: '',
//       password:''
//     }

//     this.changeNameHandler = this.changeNameHandler.bind(this);
//     this.changeEmailHandler = this.changeEmailHandler.bind(this);
//     this.changePasswordHandler = this.changePasswordHandler.bind(this);
//     this.signUp = this.signUp.bind(this);
//   }

//   // componentDidMount(){
//   //   console.log(this.state)
//   // }


//   changeNameHandler(event){
//     this.setState({user_name:event.target.value})
//   }
//   changeEmailHandler(event){
//     this.setState({user_email:event.target.value})
//   }
//   changePasswordHandler(event){
//     this.setState({password:event.target.value})
//   }

//   signUp(event){
//     event.preventDefault()

//     // let users = {user_name: this.state.user_name,user_email:this.state.user_email,password:this.state.password}
//     // console.log("Users =>"+JSON.stringify(users))
//     //   UserService.createUsers(users).then((res=>{
//     //     console.log(users)
//     //   cookies.set("user",true)
//     //   this.props.history.push('/')

//     // }))
//       this.props.history.push('/')
//   }



//   render() {
//     return (
//       <div>
//       <form>
//           <input type="text" name="" value={this.state.user_name} onChange={this.changeNameHandler}  id=""/>
//           <input type="email" name="" value={this.state.user_email} onChange={this.changeEmailHandler} id=""/>
//           <input type="password" name="" value={this.state.password} onChange={this.changePasswordHandler} id=""/>
//           <button onClick={this.signUp}>SignUp</button>
//           </form>
//       </div>
//     )
//   }
// }
