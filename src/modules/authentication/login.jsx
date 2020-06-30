import React from "react";
import Text from "../../components/text";

const Login = () => {
  return (
    <div className="Login-page">
      <div className="Login-page-components">
        <div>
          <h6 style={{ margin: "20px 0" }}>Email Id :</h6>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="Login-page-components">
        <div>
          <h6 style={{ margin: "20px 0" }}>Password :</h6>
        </div>
        <div>
          <input type="password" />
        </div>
      </div>
      <div className="login-button">
        <div className="login-button-btn">
          <Text>Login</Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
