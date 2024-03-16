import { RESLOGO_URL } from "../utils/constant";   // named import
const RestroCard = (props) => {
    const { resData} = props;
    const { name,cuisines,avgRating,sla,cloudinaryImageId} = resData?.info;       // ? -> option chaining
    return(
        <div className="restro w-[300px] h-[400px] m-4 p-4  bg-white text-wrap justify-center rounded-2xl shadow-xl">
            <img className="h-52 w-full p-2 rounded-3xl" 
               src={ RESLOGO_URL+cloudinaryImageId } alt="res-logo"/>
            <h2 className="font-bold p-2 ">{name}</h2>
            <h4 className="text-wrap p-2 ">{cuisines.join(", ")}</h4>
            <h4 className="p-2">{avgRating}</h4>
            <h4 className="p-2">{sla.slaString}</h4>

        </div>
    )
}

export default RestroCard; // named export