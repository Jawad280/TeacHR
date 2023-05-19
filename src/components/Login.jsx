import usernameLogo from "../images/person.svg";
import passwordLogo from "../images/lock.svg";
import InputDetails from "./InputDetails";

import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <div className="login">
            <div className="mainLogo">TeacHR</div>
            <InputDetails heading="Username" logo={usernameLogo} text="Enter Your Username" />
            <InputDetails heading="Password" logo={passwordLogo} text="Enter Your Password" />
            <div className="forgot">
                Forgot your password ?
            </div>
            <div className="login-buttons-container">
                <Link className="login-button" to="/home">Login</Link>
                <Link className="login-button" to="/signup">Sign Up</Link>
            </div>
        </div>
     );
}
 
export default Login;