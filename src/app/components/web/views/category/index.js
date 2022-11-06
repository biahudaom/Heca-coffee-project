import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default class Category extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        };
        return (
            <div style={{ background: '#fff' }}>
                <div className="container" id="header-category-bk">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/grocery-staples`,
                                }}>
                                    <img className="img-fluid" src="https://i.postimg.cc/NjVLbPkk/h-p-1.png" alt="grocery-stamples" />
                                    <h6>Caramel Flavour</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/personal-care`,
                                }}>
                                    <img className="img-fluid" src="https://i.postimg.cc/cC6VDTmf/h-p-2.png" alt="personalcare" />
                                    <h6>Coconut Flavour</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/household-items`,
                                }}>
                                    <img className="img-fluid" src="https://i.postimg.cc/W1jPVmbc/h-p-bg.png" alt="household-imtes" />
                                    <h6>Lactose Sugar Flavour</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/home-kitchen`,
                                }}>
                                    <img className="img-fluid" src="https://i.postimg.cc/d3xDXHKF/ly-gi-y-nha.png" alt="kitchen" />
                                    <h6>Plastic Glass</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/beverages`,
                                }}>
                                    <img className="img-fluid" src="https://i.postimg.cc/J4ssJLbz/t-i-zip.png" alt="beverages" />
                                    <h6>Zip Bag</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/breakfast-dairy`,
                                }}>
                                    <img className="img-fluid" src="https://i.postimg.cc/NG64VZFD/h-p.png" alt="breakfastdairy" />
                                    <h6>Hazelnut Flavour</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/biscuits-snacks-chocolates`,
                                }}>
                                    <img className="img-fluid" src="https://i.postimg.cc/MZLWC3Lc/lon-bg.png" alt="biscuits-snacks-chocklates" />
                                    <h6>Aluminum Cans</h6>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/noodles-sauces-instant-food`,
                                }}>
                                    <img className="img-fluid" src="img/category/noodles.png" alt="noodles" />
                                    <h6>Noodles, Sauces &amp; Instant Food</h6>
                                </Link>
                            </div>
                        </div> */}
                        {/* <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/pet-care`,
                                }}>
                                    <img className="img-fluid" src="img/category/petcare.png" alt="pet-care" />
                                    <h6>Pet Care</h6>
                                </Link>
                            </div>
                        </div> */}

                    </Slider >
                </div>
            </div >
        )
    }
}
