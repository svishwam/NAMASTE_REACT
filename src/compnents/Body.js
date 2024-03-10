import ResList from "../utils/resList";   // default import
import RestroCard from "./RestroCard";
import { useState,useEffect } from "react";
import ShimmerUI from "./ShimmerUi";
import { Link } from "react-router-dom";

const Body = () => {

        //const [listOfRestaurant,setlistOfRestaurant] = useState(ResList);
        const [listOfRestaurant,setlistOfRestaurant] = useState([]);

        const [filteredListOfRestaurant, setfilteredListOfRestaurant] = useState([]);
        
        const [inputTxt,setinputTxt] = useState("");

    useEffect(()=>{
        console.log("UseEffect");
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const Data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.918297899999999&lng=78.1343507&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await Data.json();
            console.log(json);
            // to check whether we are finding exact data on api to display 
            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            // passing json to listofRestaurant
            setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setfilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // console.log(setlistOfRestaurant);
    }



  //shimmer UI or Conditional Rendering
    if(listOfRestaurant.length===0){
        return <ShimmerUI/>
    }



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