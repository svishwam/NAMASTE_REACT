import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constant";

const useResMenuAPI = (resId)=>{
    const[ResMenu,setResMenu] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResMenu(json.data);
    }

return ResMenu;
}

export default useResMenuAPI;