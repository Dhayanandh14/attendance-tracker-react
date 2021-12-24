import React, {useEffect,useState,useRef,useContext } from 'react'
import UserService from '../Services/UserService';
import { useHistory,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import './SignInComponent.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SignInComponent=()=>{

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [cookies, setCookie] = useCookies(["user"]);
  const history = useHistory();
  let found = false;
  const users=[];
  let emailFinder,gettableObject;

  useEffect(() => {
    UserService.getUsers().then((res) => {
        users.push(res.data);
      });
  });

  const signIn= (event) =>{
    var CryptoJS = require("crypto-js");
    var decryptedPassword,decryptedPasswordString;
    let emailAndPasswordArray=[];
    const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      event.preventDefault()
      console.log(users)
      // history.push("/dashboard");
      gettableObject = users.map(i => i)
      emailFinder = gettableObject[0].map(l=>
        l.user_email+" "+l.password
        )
      for (let i in emailFinder){

        emailAndPasswordArray.push(emailFinder[i].split(" "))
      }

      for (let j in emailAndPasswordArray){
        decryptedPassword = CryptoJS.AES.decrypt(emailAndPasswordArray[j][1], "secret key 123");
        decryptedPasswordString= decryptedPassword.toString(CryptoJS.enc.Utf8);
        if(emailAndPasswordArray[j][0] === enteredEmail &&   decryptedPasswordString === enteredPassword){
          found = true;
        }
    }
    if(found){

      // localStorage.setItem("user_cookie", `naHQH1tyeG%2ByD%2B0Nnfx40qLD6X5lQ32dQ4l9WZyzW%2BqosdPtyHs1qwJNz1RHwrDjMmrWDAr1iIvmH533yyHHQpix0RCbbSbOaSL%2Bo43uMjp%2BcC5NaYuOjrfxgN9J6PHMin1RA2l0en%2Fswmm858solXOSgq0IPVngIiorln3o6ysrrrpUqWXoC6PAgKGeWRKxsQE0mJQBaBJ8rWzK%2BVomMrt6Dn1lxIZG7uM1Jj%2Bn0IQNIWDnf77HD2tzr52%2BmA7mff7jkwYslfvsw1aUvwi4Z83urPoUFLruCPCbnj2B5bVvIzyYX%2Fqb2TuTB95II%2FrZdcrV50WqZNmBsrOw0SQs6k8%3D--LKLs3rXIB7WKY4%2Bu--hkP9prmzWQcxeEovm%2BElyw%3D%3D`)
      setCookie("user", `naHQH1tyeG%2ByD%2B0Nnfx40qLD6X5lQ32dQ4l9WZyzW%2BqosdPtyHs1qwJNz1RHwrDjMmrWDAr1iIvmH533yyHHQpix0RCbbSbOaSL%2Bo43uMjp%2BcC5NaYuOjrfxgN9J6PHMin1RA2l0en%2Fswmm858solXOSgq0IPVngIiorln3o6ysrrrpUqWXoC6PAgKGeWRKxsQE0mJQBaBJ8rWzK%2BVomMrt6Dn1lxIZG7uM1Jj%2Bn0IQNIWDnf77HD2tzr52%2BmA7mff7jkwYslfvsw1aUvwi4Z83urPoUFLruCPCbnj2B5bVvIzyYX%2Fqb2TuTB95II%2FrZdcrV50WqZNmBsrOw0SQs6k8%3D--LKLs3rXIB7WKY4%2Bu--hkP9prmzWQcxeEovm%2BElyw%3D%3D`, {
        path: "/"
      });
      // window.location.replace(false);
      history.replace("/dashboard");
      window.location.replace("/dashboard")
    }else{
      alert("Please enter a valid email or password")
    }


  }
  return (
    <div className="container" >
    <form className="form-group" id="signin-form" onSubmit={signIn}>
    <h1 style={{position:"relative",top:'159px',left:"103px",display:"inline-block",margin:"0px"}}>SIGN IN</h1>
    <div className="mb-3 " style={{marginTop:"13pc"}}>
    <label htmlFor="useremail" className="form-label">Email address</label>
    <input type="email" className="form-control" id="useremail" aria-describedby="useremail-help" ref={emailInputRef} required/>
  </div>
  <div className="mb-3 ">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"  ref={passwordInputRef} required/>
  </div>
        <div className="mb-3 " >
          <button type="submit" style={{width:"100%"}} className="btn btn-primary">SIGN IN</button>
      </div>
    <span className="input-group-btn">

      <Link to="/signup">Create Account</Link>
    </span>
    </form>


    </div>
  )



}
export default SignInComponent;

// export default class SignInComponent extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       user_email:'',
//       password:'',
//       users:[]
//     }
//     this.changeEmailHandler = this.changeEmailHandler.bind(this);
//     this.changePasswordHandler = this.changePasswordHandler.bind(this);
//     this.signIn = this.signIn.bind(this);
//   }

//   componentDidMount(){
//     UserService.getUsers().then((res) => {
//       this.setState({users:res.data});
//       console.log(res.data)
//     });
//   }

//   changeEmailHandler(event){
//     this.setState({user_email:event.target.value})
//     console.log(event.target.value)
//   }
//   changePasswordHandler(event){
//     this.setState({password:event.target.value})
//     console.log(event.target.value)
//   }

//   signIn(event){
//     event.preventDefault()
//     console.log(this.state.users)

//     let email = this.state.users.map(i => i.user_email).filter(email => (email === this.state.user_email))
//     let password = this.state.users.map(j=>j.password).filter(password => (password === this.state.password))
//     // let storedEmail = email.filter(email => (email === this.state.user_email))
//     // let storedPassword = password.filter(password => (password === this.state.password))

//     if(email[0] === this.state.user_email && password[0] === this.state.password){
//       this.props.history.push('/dashboard')
//     }
//     else{
//       alert("invalid Username or password")
//     }
//   }
//   render() {
//     return (
//       <div>
//       <form>
//           <input type="email" name="" value={this.state.user_email} onChange={this.changeEmailHandler} id=""/>
//           <input type="password" name="" value={this.state.password} onChange={this.changePasswordHandler} id=""/>
//           <button onClick={this.signIn}>SignIn</button>
//           </form>
//       </div>
//     )
//   }
// }
