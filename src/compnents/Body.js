import ResList from "../utils/resList";   // default import
import RestroCard from "./RestroCard";
import { useState,useEffect } from "react";
import ShimmerUI from "./ShimmerUi";
import { Link } from "react-router-dom";
import { RestaurantList } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlinStatus";
import useRestaurantListAPI from "../utils/useRestaurantListAPI";

const Body = () => {
        const [listOfRestaurant,setlistOfRestaurant] = useState([]);
        const [filteredListOfRestaurant,setfilteredListOfRestaurant] = useState([]);
        const [inputTxt,setinputTxt] = useState("");

    useEffect(()=>{
        console.log("UseEffect");
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const Data = await fetch(RestaurantList);

            const json = await Data.json();
            console.log(json);
            // to check whether we are finding exact data on api to display 
            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            // passing json to listofRestaurant
            setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setfilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // console.log(setlistOfRestaurant);
    }



    const OnlineStatus = useOnlineStatus();


    if(OnlineStatus === false){
        return(
            <h1>
                Looks like you're Offline!! please check your internet connection;
            </h1>
        );
    }


  //shimmer UI or Conditional Rendering
    if(listOfRestaurant.length===0){
        return <ShimmerUI/>
    }

    // filteredListOfRestaurant


  

    return (
        <div className="main">
            <div className="filters">
                <div className="search">
                    <input type="text" name="SearchBar" value={inputTxt} onChange={(e)=>{
                        setinputTxt(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={
                        ()=>{
                            console.log(inputTxt);
                            const filteredRestaurant = listOfRestaurant.filter((Restaurant)=>(
                                Restaurant.info.name.toLowerCase().includes(inputTxt.toLowerCase())
                            ))
                            setfilteredListOfRestaurant(filteredRestaurant);

                        }
                    }>Search</button>
                </div> 
                <div className="filter">
                <button className="filter-btn" 
                        onClick={
                            ()=>{
                                const filteredList = listOfRestaurant.filter(
                                    (res)=>res.info.avgRating >=4.4
                                );
                                console.log(filteredList);
                                setfilteredListOfRestaurant(filteredList);
                            }
                        }
                >
                    TopRatedRestaurant</button>
                </div>

            </div>
            

            <div className="restrocontainer">

                {
                        filteredListOfRestaurant.map((Restaurant)=>(
                            // while looping each iteration should be unique . so that we are giving key
                           <Link key={Restaurant.info.id} to={"/Restaurants/"+Restaurant.info.id}>
                           <RestroCard  resData={Restaurant}/>   
                           </Link>  
                        ))
                        
                }

                    


               
            </div>           
        </div>
    )
}

export default Body;