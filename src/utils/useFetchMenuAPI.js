import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useFetchMenuAPI = (resId) =>{
    const [api, setApi] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    fetchMenu = async () => {
        const apiMenu = await fetch(MENU_API + resId);
        const json = await apiMenu.json();
        setApi(json?.data);
    };
    
    return api;
}

export default useFetchMenuAPI;