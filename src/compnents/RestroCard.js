import { RESLOGO_URL } from "../utils/constant";   // named import
const RestroCard = (props) => {
    const { resData} = props;
    const { name,cuisines,avgRating,sla,cloudinaryImageId} = resData?.info;       // ? -> option chaining
    return(
        <div className="restro">
            <img className="res-logo" 
               src={ RESLOGO_URL+cloudinaryImageId } alt="res-logo"/>
            <h2>{name}</h2>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>

        </div>
    )
}

export default RestroCard; // named export