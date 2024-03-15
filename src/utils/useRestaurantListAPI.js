import { useState,useEffect } from "react";
import { RestaurantList } from "../utils/constant";

const useRestaurantListAPI = ()=>{

    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    const [filteredListOfRestaurant,setfilteredListOfRestaurant] = useState([]);

    useEffect(()=>{
        console.log("UseEffect");
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const Data = await fetch(RestaurantList);

            const json = await Data.json();
            // console.log(json);
            // to check whether we are finding exact data on api to display 
            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            // passing json to listofRestaurant
            setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setfilteredListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // console.log(setlistOfRestaurant);            
    }
    return (filteredListOfRestaurant);
}
export default useRestaurantListAPI;
