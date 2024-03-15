import ShimmerUI from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useResMenuAPI from "../utils/useResMenuAPI";

const Restaurant = ()=>{

    const {resId} = useParams();
    const ResMenu = useResMenuAPI(resId);

    if(ResMenu==null){
        return <ShimmerUI/>;
    }

   const{name,costForTwoMessage,cuisines}= ResMenu?.cards[0]?.card?.card?.info;
   
   const{itemCards}= ResMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(itemCards);

    return(
        <div className="restro">
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