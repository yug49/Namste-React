import { RATING_SYMBOL, RESPIC_ID } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, sla, aggregatedDiscountInfoV3, areaName} = resData?.info;
    return(
        <div className="h-80 w-80 mb-28 ">
            <div className="relative">
                <img className="h-60 w-80 rounded-3xl shadow-card" src={RESPIC_ID+cloudinaryImageId} />
                <div className="absolute bottom-0 left-0 rounded-b-3xl text-white text-xl font-black bg-gradient-to-t from-black to-transparent pt-12 pl-4 pb-2 w-full">{ aggregatedDiscountInfoV3?.header ? aggregatedDiscountInfoV3?.header + " " + aggregatedDiscountInfoV3?.subHeader : ""}</div>
            </div>
            <div className="mx-3">
                <h3 className="font-semibold text-lg mt-2">{name}</h3>
                
                <div className="flex " >
                    <img src={RATING_SYMBOL} className="h-4 mt-1 mr-1" />
                    <div>{avgRating}</div>
                    <div className="ml-3 mr-3 font-medium">·</div>
                    <div className="dileverytime font-medium">{sla.slaString}</div>
                </div>

                <div className="text-gray-500">{cuisines.join(", ")}</div>
                <div>{areaName}</div>
                
            </div>
            
            
        </div>
    );
}


export default RestaurantCard;