import { useState } from "react";
import ResMenuCard from "./ResMenuCard";

const ResSubCategories = (props) => {
    const {res} = props;

    const [toggle, setToggle] = useState(false);
    const [arrow, setArrow] = useState("▼");

    

    toggleIt = () => {
        setToggle(!toggle);
        if(arrow === "▼") setArrow("▲");
        else setArrow("▼");
    }

    return(
        <div>
            <div className="border-solid border-gray-300 border-b p-3 font-semibold text-lg flex justify-between mt-3 cursor-pointer pr-7" onClick={toggleIt}>
                <div>{res?.title+" ("+res?.itemCards?.length+")"}</div>
                <div>{arrow}</div>
            </div>
            {toggle&& <ResMenuCard  itemData = {res}/>}
        </div>
    )
}

export default ResSubCategories;