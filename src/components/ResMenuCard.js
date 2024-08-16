import { useDispatch } from "react-redux";
import { VEG_SYMBOL, NONVEG_SYMBOL, DEFAULT_FOOD, RESPIC_ID } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ResMenuCard = (props) => {
    const{itemData} = props;
    
    let veg;
    if(itemData?.itemCards[0]?.card?.info?.isVeg){
        veg = VEG_SYMBOL;
    }
    else{
        veg = NONVEG_SYMBOL;
    }

    const dispatch = useDispatch();

    return(
      
        <div className="items">
        {
            itemData?.itemCards.map((item) => (
                <div key={item?.card?.info?.id}>
                    <div className="py-1 pl-3 pr-2 flex mt-5 justify-between">
                        <div className="w-4/6">
                            <img className="w-4 mb-1" src={veg}></img>
                            <div className="font-semibold text-lg">{item?.card?.info?.name}</div>
                            <div className="font-semibold ">₹{item?.card?.info?.finalPrice/100 || item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</div>
                            <div className="my-2 text-sm text-green-700">{item?.card?.info?.ratings?.aggregatedRating?.rating ?
                            "★"+item?.card?.info?.ratings?.aggregatedRating?.rating+" ("+item?. card?.info?.ratings?.aggregatedRating?.ratingCountV2+")" :""
                            }</div>
                            <div className="text-gray-500 text-sm">{item?.card?.info?.description}</div>
                        </div>
                        <div className="w-3/12 ml-16 mb-10 relative">
                            <img className="h-48 w-52 rounded-3xl" src={item?.card?.info?.imageId ? RESPIC_ID + item?.card?.info?.imageId : DEFAULT_FOOD}></img>
                            <button className="border shadow-md px-10 py-2 text-green-600 font-semibold rounded-xl ml-10 absolute -bottom-5 bg-white" onClick={() => {
                                dispatch(addItem(item?.card?.info))
                            }}>ADD</button>
                        </div>
                    
                    </div>
                    <hr />
                </div>
                
            ))
        }
        </div>
    )
}

export default ResMenuCard;