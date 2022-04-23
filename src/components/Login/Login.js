import React, { useState } from "react";
import Form from "./Form";
import "./Login.scss";

//todo: fix switchMode to form props
function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const switchMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="Login_Container">
      <div className={isLogin ? "slider" : "slider slide"}>
        <div className={isLogin ? "containerr" : "containerr slide"}>
          <Form
            isLogin={true}
            title="Welcome Back"
            caption="Hello there! Please enter your details."
            func={switchMode}
          />
          <Form
            isLogin={false}
            title="Signup to Quick Bites"
            caption="Already a member?"
            func={switchMode}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
