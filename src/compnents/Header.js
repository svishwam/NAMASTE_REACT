import { APPLOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinStatus";

const Header = () => {

    const [btnName,setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    return(
     <div className="flex justify-between bg-purple-200 m-4 p-4 shadow-lg">
        <div className="logo-container">
            <img src={APPLOGO_URL} width="128" height="128"/>
        </div>
        <div className="flex items-center">
            <ul className="flex"> 
                <li className="px-4">OnlineStatus:{OnlineStatus? "✅" : "🔴"}</li>
                <li className="px-4"><Link to="/home">Home</Link></li>
                <li className="px-4"><Link to="/About">About Us</Link></li>
                <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/Cart">Cart</Link></li>
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