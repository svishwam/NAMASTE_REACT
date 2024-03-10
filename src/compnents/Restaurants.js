// url: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.918297899999999&lng=78.1343507&restaurantId=82940&catalog_qa=undefined&submitAction=ENTER
// url:json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards

//url: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.918297899999999&lng=78.1343507&restaurantId=82940

import { useState,useEffect } from "react";
import ShimmerUI from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const Restaurant = ()=>{

    const [ResMenu,setResMenu]  = useState(null);
    const[filteredResMenu,setfilteredResMenu]= useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.918297899999999&lng=78.1343507&restaurantId=82940");
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        console.log(json.data);
        setResMenu(json.data);
        setfilteredResMenu(json.data);
        console.log("data fetched successfully");
    }

    //const {name} = ResMenu.cards[0].card.card.info;
    if(ResMenu==null){
        return <ShimmerUI/>;
    }

   const{name,costForTwoMessage,cuisines}= ResMenu.cards[0].card.card.info;
   
   const{itemCards}= ResMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
   console.log(itemCards);

    return(
        <div className="restro">
{/* 
            {
                filteredResMenu.map((menu)=>(
                    <h2>Restaurant NAME</h2>,
                    <h2>{ResMenu.cards[0].card.card.info.name}</h2>
                ))
            } */}

<h2>{name}</h2>
<h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
<ul>
    {
        itemCards.map((item)=>(
            
            <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100}</li>
        ))
    }
</ul>

</div>
    )
}

export default Restaurant;