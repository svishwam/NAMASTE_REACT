import { APPLOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinStatus";

const Header = () => {

    const [btnName,setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    return(
     <div className="Header">
        <div className="logo-container">
            <img src={APPLOGO_URL} width="128" height="128"/>
        </div>
        <div className="nav">
            <ul className="nav-item"> 
                <li>OnlineStatus:{OnlineStatus? "✅" : "🔴"}</li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
                <button 
                className="login-btn"
                onClick={()=>{
                    btnName==="Login"
                    ?setbtnName("Logout")               // ternary operator if()?ans:else ans
                    :setbtnName("Login");
                }}
                >
                    {btnName}
                </button>
            </ul>
            
        </div>
        
     </div>   
    )
}

export default Header;