import React, { useState } from "react";
import "./index.scss";
import Section from "../../components/section";
import Text from "../../components/text";
import Login from "../authentication/login";
import Register from "../authentication/register";

const Homepage = () => {
  const [LoginRegister, setLoginRegister] = useState(true);
  return (
    <Section>
      <div className="Homepage">
        <div className="Homepage-container">
          <div className="practo-image">
            <img
              className="image"
              src={require("../../assets/practo.png")}
              alt="practo"
            />
          </div>
          <div className="login-register">
            <div
              className="login"
              style={
                LoginRegister
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white", color: "black" }
              }
              onClick={() => setLoginRegister(true)}
            >
              <div className="login-text">
                <Text size="H6">Login</Text>
              </div>
            </div>
            <div
              style={
                LoginRegister
                  ? { backgroundColor: "white", color: "black" }
                  : { backgroundColor: "black", color: "white" }
              }
              className="register"
              onClick={() => setLoginRegister(false)}
            >
              <div className="register-text">
                <Text size="H6">Register</Text>
              </div>
            </div>
          </div>
          {LoginRegister ? <Login /> : <Register/>}
        </div>
      </div>
    </Section>
  );
};

export default Homepage;
