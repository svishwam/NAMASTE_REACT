import ShimmerUI from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useResMenuAPI from "../utils/useResMenuAPI";
import RestaurantCategory from "./RestaurantCategory";

const Restaurant = ()=>{

    const {resId} = useParams();
    const ResMenu = useResMenuAPI(resId);

    if(ResMenu==null){
        return <ShimmerUI/>;
    }

   console.log(ResMenu); 
   const{name,costForTwoMessage,cuisines}= ResMenu?.cards[2]?.card?.card?.info;
   
   const{itemCards}= ResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(itemCards);
   console.log("Menu", ResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards) ;
   const categories = ResMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
    c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   ));
   console.log("Categories", categories) ;
    return(
        <div className="restro text-center" >
            <h2 className="font-bold">{name}</h2>
            <h3 className="font-medium">{cuisines.join(",")} - {costForTwoMessage}</h3>
            {/* <ul>
                {
                    itemCards.map((item)=>(
                        
                        <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100}</li>
                    ))
                }
            </ul> */}

            <div>
                {
                    categories.map((category)=>(
                        <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
                    ))
                }
            </div>

        </div>
            )
        }

export default Restaurant;