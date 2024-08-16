import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import FoodTypesCard from "./FoodTypesCard";
import { Link } from "react-router-dom";

const FoodTypesCorousel = (props) => {
    const {foodTypes} = props;

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 4,
      };
    
    var collectionID = 119017;

    return(
        <div className="my-3">
            <h2 className="mt-5 font-bold text-2xl">What's on your mind?</h2>
            <Slider {...settings}>
                    {
                        foodTypes.map((food) => (
                            <Link className="collectionLink" to={"/collections/"+(food?.entityId.replace("swiggy://collectionV2?collection_id=" , '').slice(0,5)) +"/"+food?.action?.text} key={food?.id}><FoodTypesCard foodTypes={food}/></ Link>
                        ))
                    }
            </Slider>
            
        </div>
    )
}

export default FoodTypesCorousel;