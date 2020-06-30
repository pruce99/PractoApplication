import React from 'react'
import Text from '../../components/text'

const Register = () => {
    return ( 
    <div className="Register-page">
        <div className="Register-page-components">
        <div>
          <h6 style={{ margin: "20px 0" }}>Full Name :</h6>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="Register-page-components">
        <div>
          <h6 style={{ margin: "20px 0" }}>Email Id :</h6>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="Register-page-components">
        <div>
          <h6 style={{ margin: "20px 0" }}>Password :</h6>
        </div>
        <div>
          <input type="password" />
        </div>
      </div>
      <div className="register-button">
        <div className="register-button-btn">
          <Text>Register</Text>
        </div>
      </div>
    </div> );
}
 
export default Register;