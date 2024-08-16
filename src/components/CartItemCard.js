import { VEG_SYMBOL, NONVEG_SYMBOL } from "../utils/constants";
import { RESPIC_ID, DEFAULT_FOOD } from "../utils/constants";

const CartItemCard = (props) => {
    const {cartItems} = props;

    const{itemData} = props;
    
    let veg;
    if(cartItems.isVeg){
        veg = VEG_SYMBOL;
    }
    else{
        veg = NONVEG_SYMBOL;
    }

    return(
        <div className="items">
        {
            cartItems.map((item) => (
                <div key={item?.id}>
                    <div className="py-1 pl-3 pr-2 flex mt-5 justify-between">
                        <div className="w-4/6">
                            <img className="w-4 mb-1" src={veg}></img>
                            <div className="font-semibold text-lg">{item?.name}</div>
                            <div className="font-semibold ">₹{item?.finalPrice/100 || item?.price/100 || item?.defaultPrice/100}</div>
                            <div className="my-2 text-sm text-green-700">{item?.card?.info?.ratings?.aggre.rating ?
                            "★"+item?.card?.info?.ratings?.aggregatedRating?.rating+" ("+item?. card?.in.aggregatedRating?.ratingCountV2+")" :""
                            }</div>
                            <div className="text-gray-500 text-sm">{item?.description}</div>
                        </div>
                        <div className="w-3/12 ml-16 mb-10 relative">
                            <img className="h-full w-full rounded-3xl" src={item?.imageId ? RESPIC_ID + item?.imageId : DEFAULT_FOOD}></img>
                            <button className="border shadow-md px-10 py-2 text-red-600 font-semibold rounded-xl ml-6 absolute -bottom-5 bg-white">REMOVE</button>
                        </div>
                    </div>
                    <hr />
                </div>
                
            ))
        }
        </div>
    )
}

export default CartItemCard;