import {RESLOGO_URL} from "../utils/constant";
const ItemList = ({items}) => {
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
                        <img src={RESLOGO_URL + item.card.info.imageId} className="w-full  bg-gray-100"/> 
                        </div>
                        
                        <div className="relative">
                            <button className="bg-black text-green-700 border px-6 border-black ">ADD +</button>  
                        </div>
                         
                        
                    </div>
                          
                </div>
                
                    
                
            ))};
        </div>
    )

}
export default ItemList;