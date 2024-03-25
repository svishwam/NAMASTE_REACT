import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data})=>{

const[btn,setbtn] = useState(false) 

const handleClick =()=>{
    console.log("button clicked")
    setbtn(!btn)
}

return(
    <div className="cursor-pointer">
        <div className="flex justify-between bg-grey-100 w-7/12 mx-auto my-4 p-4 shadow-lg }" onClick={handleClick}>
            <span className="font-semibold ">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        <div>
            {btn && <ItemList items={data.itemCards}/>}
        </div>
    </div>
   
)
}
export default RestaurantCategory;