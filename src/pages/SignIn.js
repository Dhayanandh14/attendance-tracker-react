import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FormInput from "../components/FormInput";
import UserService from "../Services/UserService";
import "./SignInComponent.css";

const SignInComponent = () => {
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
    event.preventDefault();
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

    function authentication(user) {
      if (user) {
        alert("DONE");
      } else {
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
