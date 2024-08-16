import { useState } from "react";
import ResMenuCard from "./ResMenuCard";
import ResSubCategories from "./ResSubCategories";

const MapMenuCards = (props) => {
    const {cardType, toggleCategory, setToggle} = props;
    const menuData = cardType?.card?.card;
    
    
    let arrow = "▼";

    if(toggleCategory) arrow = "▲"

    toggleIt = ()=>{
        setToggle();
    };
    

    if(menuData?.title != null && menuData?.title != "Top Picks"){
        if(menuData?.categories != null){
            return(
                <div className="menu border-solid border-b-8 border-gray-200">
                    <div className="p-3 font-bold text-lg">
                        <h2 className="foodTitleHeading">{menuData?.title}</h2>
                    </div>
                    {
                        menuData?.categories.map((res) => (
                            <div key={res?.title}>
                                <ResSubCategories res={res} />
                            </div>
                        ))
                    }
                </div>
            )
        }
        else{
            return(
                <div className="border-solid border-b-8 border-gray-200"> 
                    <div className="foodTitle flex pl-3 py-5 font-bold text-lg justify-between cursor-pointer pr-7"
                     onClick={toggleIt}>
                        <h2>{menuData?.title+" ("+menuData?.itemCards?.length+")"}</h2>
                        <h2>{arrow}</h2>
                    </div>                    
                    {toggleCategory && <ResMenuCard  itemData={menuData}/>}
                </div>
            )
        }
    }
}

export default MapMenuCards;