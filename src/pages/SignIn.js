import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FormInput from "../components/FormInput";
import UserService from "../Services/UserService";
import "./SignInComponent.css";

const SignInComponent = () => {
  const history = useHistory();
  const [signInFormValues, setSigninFormValues] = useState({
    email: "",
    password: "",
  });
  const formInputValuesHandler = (e) => {
    setSigninFormValues({
      ...signInFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = (event) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    event.preventDefault();
    if(re.test(signInFormValues.email)){
     if (signInFormValues.password==""){
      alert("Please enter your password")
    }else{
      UserService.getUserByEmailandPassword(
        signInFormValues.email,
        signInFormValues.password
      ).then((res) => {
        if (res.data) {
          authentication(res.data);
        } else {
          alert("invalid Credentails");
          return;
        }
      });
    }
  }else{
    alert("invalid email format");
  }

    function authentication(user) {
      if (user[0] == "admin" || user[0] == "coach") {
        localStorage.setItem("role",user[0])
        localStorage.setItem("id",user[2])
        window.location.href = "/dashboard"
        // history.push('/dashboard')
      }else if(user[0] == "student" || user[0] == "guest"){
        localStorage.setItem("role",user[0])
        localStorage.setItem("id",user[2])
        // history.push('/reports')
        window.location.href = "/dashboard"
      }
      else {
        alert("invalid credentials");
      }
    }
  };
  return (
    <div className="container">
      <form className="form-group" id="signin-form" onSubmit={signIn}>
        <h1
          style={{
            position: "relative",
            top: "159px",
            left: "103px",
            display: "inline-block",
            margin: "0px",
          }}
        >
          SIGN IN
        </h1>

        <div className="mb-3 " style={{ marginTop: "13pc" }}>
          <label htmlFor="useremail" className="form-label">
            Email address
          </label>
          <FormInput
            type="email"
            id="useremail"
            name="email"
            onChange={formInputValuesHandler}

          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <FormInput
            type="password"
            id="password"
            name="password"
            onChange={formInputValuesHandler}
          />
        </div>
        <div className="mb-3 ">
          <button
            type="submit"
            style={{ width: "100%" }}
            className="btn btn-primary"
            onClick={signIn}
          >
            SIGN IN
          </button>
        </div>
        <span className="input-group-btn">
          <Link to="/signup">Create Account</Link>
        </span>
      </form>
    </div>
  );
};
export default SignInComponent;
