import { APPLOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName,setbtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    const cartItem = useSelector((Store)=>Store.cart.items);
    console.log(cartItem);
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
                <li className="px-4 font-bold"><Link to="/Cart">Cart({cartItem.length} items)</Link></li>
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
                <li className="px-4"><Link to="/Cart">{loggedInUser}</Link></li>
            </ul>
            
        </div>
        
     </div>   
    )
}

export default Header;