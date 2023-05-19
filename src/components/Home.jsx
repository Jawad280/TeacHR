import Dropdown from "./Dropdown";
import DropElement from "./DropElement";

import grid from "../images/grid.svg";
import docu from "../images/document.svg";
import calendar from "../images/calendar.svg";
import settings from "../images/gear.svg";

import { Link } from "react-router-dom";

const classRoomElements = [
    <DropElement title="Classroom A" icon={grid}/>,
    <DropElement title="Classroom B" icon={grid}/>,
    <DropElement title="Classroom C" icon={grid}/>
];

const resourcesElements = [
    <DropElement title="Resource 1" icon={docu}/>,
    <DropElement title="Resource 2" icon={docu}/>,
    <DropElement title="Resource 3" icon={docu}/>
];

const adminMatterElements = [
    <DropElement title="Leave Manager" icon={calendar}/>,
    <DropElement title="Profile Settings" icon={settings}/>
];

const Home = () => {
    return ( 
        <div className="home">
            <div className="home-top">
                <div className="mainLogo">TeacHR</div>
                <Link className="logout-button" to="/">Log Out</Link>
            </div>
            <Dropdown title="Classrooms" dropElement={classRoomElements}/>
            <Dropdown title="Resources" dropElement={resourcesElements}/>
            <Dropdown title="Admin Matters" dropElement={adminMatterElements}/>
        </div> 
     );
}
 
export default Home;