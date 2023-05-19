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

const classRooms = {
    title: "Classroom",
    dropElement: classRoomElements
};

const resourcesElements = [
    <DropElement title="Resource 1" icon={docu}/>,
    <DropElement title="Resource 2" icon={docu}/>,
    <DropElement title="Resource 3" icon={docu}/>
];

const resources = {
    title: "Resources",
    dropElement: resourcesElements
};

const adminMatterElements = [
    <DropElement title="Leave Manager" icon={calendar}/>,
    <DropElement title="Profile Settings" icon={settings}/>
];

const adminMatters = {
    title: "Admin Matters",
    dropElement: adminMatterElements
};

const dropDowns = () => {
    return [classRooms, resources, adminMatters]
    .map(x => <Dropdown title={x.title} dropElement={x.dropElement} />);
}

const Home = () => {
    return ( 
        <div className="home">
            <div className="home-top">
                <div className="mainLogo">TeacHR</div>
                <Link className="logout-button" to="/">Log Out</Link>
            </div>
            {dropDowns()}
        </div> 
     );
}
 
export default Home;