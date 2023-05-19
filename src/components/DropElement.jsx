

const DropElement = (props) => {

    const { title,  icon } = props;

    return ( 
        <div className="dropElement-container">
            <img src={icon} />
            <div>{title}</div>
        </div>
     );
}
 
export default DropElement;