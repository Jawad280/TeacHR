
const InputDetails = (props) => {
    
    const { heading, logo, text } = props;
 
    return ( 
            <div className="inputDetails">
                <div>{heading}</div>
                <div className="inputDetails-bar">
                    <img src={logo} className="inputDetails-logo"/>
                    <input placeholder={text} />
                </div>
            </div>
     );
}
 
export default InputDetails;