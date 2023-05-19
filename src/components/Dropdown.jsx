import { useState } from "react";
import { ReactComponent as Down } from "../images/chevron-down.svg";
import { ReactComponent as Up } from "../images/chevron-up.svg";

const Dropdown = (props) => {

    const { title, dropElement } = props;

    const iconManager = (icon) => {
        if (icon === "down") {
            return <Down stroke='white' />
        } else {
            return <Up stroke='white' />
        }
    }

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    const dropped = () => {
        if (clicked) {
            return dropElement.map(x => x);
        } 
    }

    return ( 
        <div className="dropdown">
            <div className="dropdown-container">
                <div>{title}</div>
                <div className="dropdown-icon-down" onClick={handleClick}>
                    {iconManager(clicked ? "up" : "down")}
                </div>
            </div>
            {dropped()}
        </div>
     );
}
 
export default Dropdown;