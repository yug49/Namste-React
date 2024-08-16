import { ShimmerResDetails, ShimmerResCard } from "./ShimmerUI";
import { useParams } from "react-router-dom";
import ResLayout from "./ResLayout";
import useFetchMenuAPI from "../utils/useFetchMenuAPI";

const ResMenu = () => {
    const {resId} = useParams();

    const api = useFetchMenuAPI(resId);

    const menu = api?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

    const resDetails = api?.cards[2]?.card?.card?.info;


    if(menu === undefined){
        return (
            <div className="shimmermenudisplay">
                <ShimmerResDetails />
                <ShimmerResCard />
                <hr className="mx-140"/>
                <ShimmerResCard />
                <hr className="mx-140"/>
                <ShimmerResCard />
                <hr className="mx-140"/>
                <ShimmerResCard />
                <hr className="mx-140"/>
                <ShimmerResCard />
                <hr className="mx-140"/>
                <ShimmerResCard />
            </div>
        )
    }


    return(
        <ResLayout resDetails={resDetails} menu={menu}/>
    )


}

export default ResMenu;