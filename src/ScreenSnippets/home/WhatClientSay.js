import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class WhatClientSay extends Component {
    render() {
        return (
            <div className="what container text-center mt-5 mb-5" id="what">
                <h2 className="">WHAT CLIENT SAY?</h2>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                <Carousel>
                    <Carousel.Item>
                        <img className="img-responsive slider__image" src="../images/slider-image.png" alt="" />
                        <p className="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        <h3 className="slider__name">Sheryl D</h3>
                        <p className="slider__title">UI Design Agency</p>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="img-responsive slider__image" src="../images/slider-image2.png" alt="" />
                        <p className="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        <h3 className="slider__name">Sheryl D</h3>
                        <p className="slider__title">UI Design Agency</p>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="img-responsive slider__image" src="../images/slider-image3.png" alt="" />
                        <p className="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        <h3 className="slider__name">Sheryl D</h3>
                        <p className="slider__title">UI Design Agency</p>
                    </Carousel.Item>


                </Carousel>
            </div>
        )
    }
}

export default WhatClientSay;