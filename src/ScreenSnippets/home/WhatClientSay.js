import React, { Component } from 'react';

class WhatClientSay extends Component {
    render() {
        return (
            <div class="container">
                <section class="slider">
                    <div class="page-section text-center">
                        <h2 class="page-section__title">WHAT CLIENT SAY?</h2>
                        <p class="page-section__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">

                            <div class="carousel-inner">
                                <div class="item active">
                                    <img class="img-responsive slider__image" src="../images/slider-image.png" alt="" />
                                    <p class="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                    <h3 class="slider__name">Sheryl D</h3>
                                    <p class="slider__title">UI Design Agency</p>
                                </div>

                                <div class="item">
                                    <img class="img-responsive slider__image" src="../images/slider-image.png" alt="" />
                                    <p class="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                    <h3 class="slider__name">Sheryl D</h3>
                                    <p class="slider__title">UI Design Agency</p>
                                </div>

                                <div class="item">
                                    <img class="img-responsive slider__image" src="../images/slider-image.png" alt="" />
                                    <p class="slider__paragraph">magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                                    <h3 class="slider__name">Sheryl D</h3>
                                    <p class="slider__title">UI Design Agency</p>
                                </div>
                            </div>

                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <i class="material-icons">chevron_left</i>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <i class="material-icons">chevron_right</i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default WhatClientSay;