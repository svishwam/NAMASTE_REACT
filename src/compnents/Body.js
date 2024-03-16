import ResList from "../utils/resList";   // default import
import RestroCard from "./RestroCard";
import { useState,useEffect } from "react";
import ShimmerUI from "./ShimmerUi";
import { Link } from "react-router-dom";
import { RestaurantList } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlinStatus";
import useRestaurantListAPI from "../utils/useRestaurantListAPI";

const Body = () => {
        const [listOfRestaurant,setlistOfRestaurant] = useState(null);
        const [filteredListOfRestaurant,setfilteredListOfRestaurant] = useState(null);
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
    if(listOfRestaurant==null){
        return <ShimmerUI/>
    }

    return (
        <div className="main">
            <div className="filters flex justify-center">
                <div className="search">
                    <input type="text" placeholder="search for Restaurant and Food" name="SearchBar" value={inputTxt} onChange={(e)=>{
                        setinputTxt(e.target.value);
                    }} className="bg-gray-200 px-4 py-1 m-4 rounded-lg shadow-lg w-72"/>
                    <button className="search-btn  px-4 py-1 m-4 bg-green-200 rounded-lg shadow-lg" onClick={
                        ()=>{
                            console.log(inputTxt);
                            const filteredRestaurant = listOfRestaurant.filter((Restaurant)=>(
                                Restaurant.info.name.toLowerCase().includes(inputTxt.toLowerCase())
                            ))
                            setfilteredListOfRestaurant(filteredRestaurant);

                        }
                    }>Search</button>
                </div> 
                <div className="filter flex">
                <button className="filter-btn bg-gray-200 px-4 py-1 m-4 rounded-lg shadow-lg " 
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
            

            <div className="restrocontainer bg-blue-50 flex flex-wrap text-wrap m-4 p-4">

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