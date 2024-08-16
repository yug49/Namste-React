import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { ShimmerButton , ShimmerBox, ShimmerCollection, ShimmerTopChains } from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";
import FoodTypesCorousel from "./FoodTypesCorousel";
import TopChainsCorousel from "./TopChainsCorousel";

const Body = () => {
    const [searchVal, setSearchVal] = useState("");
    const online = useOnlineStatus();

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [foodTypes, setFoodTypes] = useState([]);
    const [restaurantsChain, setRestaurantsChain] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFoodTypes(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setRestaurantsChain(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(online === false){
        return <div  className="offline">
                <h1>
                    You are offline
                </h1>
        </div>
    }

    if(listOfRestaurants.length === 0){
        return (
            <div className="shimmerdisplay">
                <ShimmerCollection />
                <hr className="mx-60 my-20"/>
                <ShimmerTopChains />
                <hr className="mx-60 mt-20 mb-10" />
                <ShimmerButton />
                <ShimmerBox />
            </div>
        )
    }
    else{
    return(
        <div className="mx-60 ">
            <div className="FoodTypes">
                <FoodTypesCorousel foodTypes={foodTypes} />
            </div>
            <hr className="mt-20"/>
            <div className="topResChains">
            <h2 className="mt-8 font-bold text-2xl">Top Restaurant Chains</h2>
                <TopChainsCorousel restaurants={restaurantsChain} />
            </div>
            <hr className="mt-16" />
            <div>
                <h2 className="mt-8 font-bold text-2xl">Restaurants with online food delivery</h2>
            </div>
            <div className="flex">
                <div className="my-7 mr-7">
                    <input className="border-1 border-solid border-gray-300 rounded-l-3xl px-3 py-1" value={searchVal} onChange={(e) => {
                        setSearchVal(e.target.value);
                    }}/>
                    <button className="border-y border-r border-solid border-gray-300 bg-gray-100 rounded-r-3xl text-center px-3 py-1" onClick={() => {
                        
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchVal.toLowerCase())
                        );
                        setFilteredRestList(filteredList);
                    }}>Search</button>
                </div>
                <button
                    className="my-7 mr-7 border-1 border-solid border-gray-300 rounded-3xl px-3 py-1"
                    onClick={() => {
                        const topratedlist = filteredRestList.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setFilteredRestList(topratedlist);
                    }}>
                        Top Rated Restaurants
                </button>
                <button
                    className="my-7 mr-7 border-1 border-solid border-gray-300 rounded-3xl px-3 py-1"
                    onClick={() => {
                        fetchData();
                    }}>
                        Load Default
                        
                </button>
            </div>
            
            <div className="flex flex-wrap justify-between">
                {
                    filteredRestList.map((restaurant) => (
                        <Link className="resCardLink" to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard resData = {restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    );
    }
};

export default Body;