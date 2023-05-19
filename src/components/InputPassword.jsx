import eyeIcon from "../images/eye.svg";
import closedEyeIcon from "../images/eye-slash.svg";
import { useState } from "react";

const InputPassword = (props) => {
    const { heading, logo, text } = props;

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    const showPassword = () => {
        if (open) {
            return <input placeholder={text} type="password"/>
        } else {
            return <input placeholder={text} />
        }
    }
 
    return ( 
            <div className="inputDetails">
                <div>{heading}</div>
                <div className="inputDetails-bar">
                    <img src={logo} className="inputDetails-logo"/>
                    {showPassword()}
                    <img src={open ? eyeIcon : closedEyeIcon} className="password-icon" onClick={handleClick}/>
                </div>
            </div>
     );
}
 
export default InputPassword;