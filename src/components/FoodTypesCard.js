import { RESPIC_ID } from "../utils/constants";

const FoodTypesCard = (props) => {
    const {foodTypes} = props;
    const colId = foodTypes?.entityId;
    return(
        <div>
            <img className="w-40 mr-3" src={RESPIC_ID+foodTypes?.imageId}></img>
        </div>
    )
}

export default FoodTypesCard;