import React, { Component } from "react";
import RecommendItemInfoCard from "../Components/RecommendItemInfoCard";




class ProductCarousel extends Component {

    render() {
        return (
            <div className="parent-div">
                <div className="container">
                    <div className="row">

                    

                    {/* --------------------------- indicators ------------------------------- */}

                    <div class="col-12">
                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">

                                        <div class="col-md-3 mb-3">
                                           <RecommendItemInfoCard />
                                        </div>

                                        <div class="col-md-3 mb-3">
                                           <RecommendItemInfoCard />
                                        </div>

                                        <div class="col-md-3 mb-3">
                                           <RecommendItemInfoCard />
                                        </div>

                                        <div class="col-md-3 mb-3">
                                           <RecommendItemInfoCard />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------- controls ------------------------------- */}

                        <div class="col-12 text-center">
                            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i class="fa fa-arrow-left"></i>
                            </a>

                            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i class="fa fa-arrow-right"></i>
                            </a>

                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}

export default ProductCarousel;
