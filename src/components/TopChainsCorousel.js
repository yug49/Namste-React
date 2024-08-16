import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const TopChainsCorousel = (props) => {
    const {restaurants} = props;

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
      };
    
    return(
        <div className="mt-10 mb-20">
            <Slider {...settings}>
                {
                    restaurants.map((res) => (
                        <Link className="resCardLink" to={"/restaurant/"+res?.info?.id} key={res?.info?.id}><RestaurantCard resData={res} /></Link>
                    ))
                }
            </Slider>
        </div>
    )
}

export default TopChainsCorousel;