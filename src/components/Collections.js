import { useParams } from "react-router-dom";
import { COLLECTION_API1, COLLECTION_API2, COLLECTION_API3 } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { ShimmerBox, ShimmerCollectionAddOns } from "./ShimmerUI";

const Collections = () => {
    const {colId, colName} = useParams();
    const [collection, setCollection] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    var apiName = colName;
    if(apiName==="Pizzas") apiName = "Pizza";
    else if(apiName === "Burgers") apiName = "Burger";
    else if(apiName === "North Indian") apiName = "NorthIndian";
    else if(apiName === "Cakes") apiName = "Cake";
    else if(apiName === "Paratha") apiName = "paratha";
    else if(apiName === "Ice Cream") apiName = "IceCreams";
    else if(apiName === "Gulab Jamun") apiName = "gulab_jamun";
    else if(apiName === "Pure Veg") apiName = "PureVeg";
    else if(apiName === "Noodles") apiName = "noodles";
    else if(apiName === "Samosa") apiName = "samosa";

    const COLLECTION_API = COLLECTION_API1 + colId + COLLECTION_API2 + apiName + COLLECTION_API3;


    useEffect(() => {
        fetchAPI();
    },[]);

    const fetchAPI = async () => {
        const data = await fetch(COLLECTION_API);
        const json = await data?.json();
        console.log("here is data");
        console.log(json?.data?.cards);
        setCollection(json?.data?.cards.slice(3));
        setTitle(json?.data?.cards[0].card?.card?.title);
        setDescription(json?.data?.cards[0].card?.card?.description);
    }

    
    console.log("here");
    console.log(collection);
    console.log(title);
    console.log(description);
    //console.log(colId+"----"+apiName);
    //console.log(COLLECTION_API);
    if(collection.length === 0){
        return(
            <div>
                <ShimmerCollectionAddOns />
                <ShimmerBox />
            </div>
        )
    }
    return(
        <div className="my-5 mx-60">
            <div>
                <h1 className="font-extrabold text-4xl">{title}</h1>
                <h2 className="text-gray-500 mb-5 mt-4 text-lg">"{description}"</h2>
                <h2 className="font-bold text-3xl mb-5">Restaurants to explore</h2>
            </div>
            <div className="flex flex-wrap gap-12">
            {
                collection.map((restaurant) => (
                    <Link className="resCardLink" to={"/restaurant/"+restaurant?.card?.card?.info?.id} key={restaurant?.card?.card?.info?.id}><RestaurantCard resData = {restaurant.card?.card} /></Link>
                ))
            }
            </div>
        </div>
    )

}

export default Collections;