import MapMenuCards from "./MapMenuCards"
import { RATING_SYMBOL } from "../utils/constants";
import { useState } from "react";

const ResLayout = (props) => {
    const {resDetails, menu} = props;
    const[toggleCategory, setToggleCategory] = useState(null);
    


    return(
        <div className="mx-140">
            <h1 className="text-2xl my-8 font-bold">{resDetails?.name}, {resDetails?.city}</h1>
            <div className="rounded-3xl p-3 bg-gradient-to-t from-gray-300 to-white">
            <div className="border-solid border-1 border-gray-300 p-3 rounded-3xl bg-white"><div>
                
                <h3 className="flex ">
                    <img className="h-4 mt-1 mr-1" src={RATING_SYMBOL} />
                    <div className="font-semibold">{resDetails?.avgRating}</div>
                    <div className="font-semibold">{"(" + resDetails?.totalRatingsString + ")"}</div>
                    <div className="mx-2 font-black text-gray-500"> · </div>
                    <div className="font-semibold">{resDetails?.costForTwoMessage}</div>  
                </h3>

                <h3 className="my-2">{resDetails?.cuisines.join(", ")}</h3>

                <div className="flex">
                    <div className="font-semibold">Outlet </div>
                    <div className="text-gray-500 ml-4 mb-2">{resDetails?.locality}</div>
                </div>
                
                <div>{resDetails?.sla?.slaString}</div>
                
            </div>
            </div></div>
            <div className="mapingCards">
                {
                    menu?.cards.map((cardsTypes, index) => (
                        <div className="mt-5" key={self.crypto.randomUUID()}>
                            <MapMenuCards cardType = {cardsTypes} toggleCategory={index === toggleCategory ? true : false} setToggle={() => {index === toggleCategory ? setToggleCategory(null) : setToggleCategory(index)}}/>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ResLayout;