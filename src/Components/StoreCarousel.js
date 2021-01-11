
import React, { Component } from "react";
import tv from "../../public/images/Products/tv.jpg";
import food from "../../public/images/Products/food.jpg";
import laptob from "../../public/images/Products/laptob.jpg";

class StoreCarousel extends Component {

    render() {

        return (
            <div className="parent">
                <div id="demo" className="carousel slide" data-ride="carousel">

                {/* ---------------------------------indicators------------------------------------------ */}

                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                {/* --------------------------------- images ------------------------------------------ */}

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={tv}  alt="Los Angeles"  />
                            <div className="carousel-caption">
                                <h3 className="text-dark">Browse all kinds of home appliances !</h3>
                                <a href="" className="btn btn-primary"></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={food}  alt="Chicago" />
                            <div className="carousel-caption">
                                <h3>Browse all kinds of home appliances !</h3>
                                <a href="" className="btn btn-primary"></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={laptob}  alt="New York" />
                            <div className="carousel-caption">
                                <h3>Browse all kinds of home appliances !</h3>
                                <a href="" className="btn btn-primary"></a>
                            </div>
                        </div>
                    </div>

                    {/* -----------------------------------controls ---------------------------------------- */}

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
        );
    }
}

export default StoreCarousel;
