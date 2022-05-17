import React, { useEffect } from "react";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import { login, signup } from "../../redux/user/userActions";
import { AUTH } from "../../redux/user/userTypes";

//todo: finalize google login

const initialFormData = { fname: "", lname: "", email: "", password: "" };

const Form = ({ isLogin, title, caption, func }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFromData] = useState(initialFormData);
  const [googleError, setGoogleError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const data = {
        email: formData.email,
        password: formData.password,
      };
      dispatch(login(data));
    } else {
      dispatch(signup(formData));
    }
  };

  const resetForm = () => {
    setFromData(initialFormData);
  };

  const { loading, error, isAuthenticated, error1, response } = useSelector(
    (state) => state.userReducer
  );

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  // const googleClientId =
  //   "692547204413-pu0s0pbil47rnium26j0sc06esjrr4dl.apps.googleusercontent.com";

  //removed google login for token reasons

  // const googleSuccess = async (res) => {
  //   try {
  //     setGoogleError(""); //remove google signup error
  //     console.log(res);
  //     const data = {
  //       email: res.profileObj.email,
  //       firstName: res.profileObj.givenName,
  //       lastName: res.profileObj.familyName,
  //       googleTokenId: res.tokenId,
  //     };
  //     dispatch({ type: AUTH });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const googleFailure = () => {
  //   // set error for google signup
  //   setGoogleError("There was an error signing in with google.");
  // };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className={isLogin ? "left" : "right"} id={isLogin ? "left" : "right"}>
      <div className="content">
        <h1 className="primaryColor m-0 title logo">
          <FaUtensils
            color={"var(--primary)"}
            cursor={"pointer"}
            size={30}
            onClick={() => {
              navigate("/");
            }}
          />
        </h1>
        <div className="title">{title}</div>
        <div className="caption">
          {caption}{" "}
          {!isLogin && (
            <>
              <span
                onClick={() => {
                  func();
                }}
                className="slide-button"
              >
                Login
              </span>
            </>
          )}
        </div>
        {/* {isLogin && (
          <>
            <GoogleLogin
              clientId={googleClientId}
              className="login-with-google"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <div className="or">Or</div>
          </>
        )} */}
        <form
          action={isLogin ? "login" : "signup"}
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="error">{googleError}</div>
          {!isLogin && (
            <>
              <div className="error">{error1}</div>
              <div className="error">{response}</div>
              <div className="row2">
                <Input
                  name="firstName"
                  label="Firstname"
                  type="text"
                  placeholder="Enter your firstname"
                  handleChange={handleChange}
                  style={{ marginRight: "10px", width: "90%" }}
                />
                <Input
                  name="lastName"
                  label="Lastname"
                  type="text"
                  placeholder="Enter your lastname"
                  handleChange={handleChange}
                />
              </div>
            </>
          )}
          {isLogin && <div className="error">{error}</div>}
          <Input
            name="email"
            label="Email"
            type="text"
            placeholder="Enter your email"
            handleChange={handleChange}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            handleChange={handleChange}
          />
          <button type="submit" className="button primaryBtn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        {isLogin && (
          <>
            <div className="switch">
              <span>
                Don't have an account?{" "}
                <span
                  id="signup-slide-button"
                  className="slide-button"
                  onClick={() => {
                    func();
                  }}
                >
                  Sign Up
                </span>
              </span>
              <span /* onClick={props.func} */ className="forgot-pass">
                Forgot password?
              </span>
            </div>
          </>
        )}
        {/* {!isLogin && (
          <>
            <div className="or">Or</div>
            <GoogleLogin
              clientId={googleClientId}
              className="login-with-google"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </>
        )} */}
      </div>
    </div>
  );
};

export default Form;
