import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FormInput from "../components/FormInput";
import UserService from "../Services/UserService";
import "./SignUpComponent.css";

const SignUpComponent = () => {
  const [signUpFormValues, setSignUpFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const formInputValuesHandler = (e) => {
    setSignUpFormValues({
      ...signUpFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = (event) => {
    const username = signUpFormValues.name;
    const useremail = signUpFormValues.email;
    const password = signUpFormValues.password;
    event.preventDefault();
    UserService.getUserByEmail(useremail).then((res) => {
      if (res.data === "email exist") {
        alert("Email already exist");
      } else {
        authentication(res.data);
      }
    });
    function authentication(user) {
      let usernameWithCapitalize =
        username[0].toUpperCase() + username.slice(1);
      let users = {
        user_name: usernameWithCapitalize,
        user_email: useremail,
        password: password,
      };
      UserService.createUsers(users).then((res) => {});
    }
  };
  return (
    <div className="container">
      <form className="form-group" id="signup-form" onSubmit={signUp}>
        <h1
          style={{
            position: "relative",
            top: "164px",
            left: "100px",
            display: "inline-block",
            margin: "0px",
          }}
        >
          SIGN UP
        </h1>

        <div
          className="mb-3 "
          style={{ marginRight: "auto", marginLeft: "auto", marginTop: "13pc" }}
        >
          <label htmlFor="username" className="form-label">
            Full name
          </label>
          <FormInput
            type="text"
            id="username"
            onChange={formInputValuesHandler}
            name="name"
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="useremail" className="form-label">
            Email address
          </label>
          <FormInput
            type="email"
            id="useremail"
            onChange={formInputValuesHandler}
            name="email"
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
            onClick={signUp}
          >
            SIGN UP
          </button>
        </div>
        <span className="input-group-btn">
          <Link to="/signin">Login With Existing Account</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUpComponent;
