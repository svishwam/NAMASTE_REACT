import { useDispatch } from "react-redux";
import {RESLOGO_URL} from "../utils/constant";
import { addItem } from "../utils/CartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const HandleAddItem = (item)=>{
        dispatch(addItem(item)); 
   }


    return(
        <div>
            {items.map((item)=>(
                <div className="flex justify-between w-7/12 mx-auto p-4 shadow-lg cursor-pointer  border-transparent  hover:border-blue-400">
                    <div key={item.card.info.id} className=" w-9/12 text-left p-4 ">
                        <div>
                            <div className="font-semibold">{item.card.info.name}</div>
                            <div className="p-4">₹{item.card.info.price/100}</div>
                            <p className="text-sm ">{item.card.info.description}</p>
                        </div>

                    </div>
                    
                    <div className="w-3/12 p-4">
                        <div>
                        <img src={RESLOGO_URL + item.card.info.imageId} className="w-[130px] h-[100px] bg-gray-100 m-4"/> 
                        </div>
                        
                        <div className="relative w-[100px]">
                            <button className="bg-white text-green-700 border rounded-md px-4 py-2 absolute  right-0 bottom-0 border-grey "        
                                onClick={()=>HandleAddItem(item)}>ADD 
                            </button>  
                        </div>
                         
                        
                    </div>
                          
                </div>
                
                    
                
            ))};
        </div>
    )

}
export default ItemList;