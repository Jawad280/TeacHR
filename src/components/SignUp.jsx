import InputDetails from "./InputDetails";
import InputPassword from "./InputPassword";

import usernameLogo from "../images/person.svg";
import passwordLogo from "../images/lock.svg";
import emailLogo from "../images/envelope.svg";

import { Link } from "react-router-dom";

const SignUp = () => {
    return ( 
        <div className="login">
            <div className="mainLogo">TeacHR</div>
            <InputDetails heading="Username" logo={usernameLogo} text="Enter Your Username" />

            <InputDetails heading="Email" logo={emailLogo} text="Enter Your Email" />

            <InputPassword heading="Password" logo={passwordLogo} text="Enter Your Password" password="password"/>

            <Link className="create-account-button" to="/home">Create Account</Link>
        </div>
    );
}
 
export default SignUp;