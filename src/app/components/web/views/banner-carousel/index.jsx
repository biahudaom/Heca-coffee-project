import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from '../category';
export default class Bannerslider extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <Category />
                <Slider {...settings}>
                    <div className="owl-item">
                        <img src="https://i.postimg.cc/tgjfW9V0/3.jpg" alt="supermarket" />
                    </div >
                    <div className="owl-item">
                        <img src="https://i.postimg.cc/VNmG543m/4.jpg" alt="supermarket" />
                    </div>
                    <div className="owl-item">
                        <img src="https://i.postimg.cc/NGZwLqbt/2.jpg" alt="supermarket" />
                    </div>
                </Slider>
            </div>
        )
    }
}
