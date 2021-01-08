import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../../../public/images/blog-pic1.png';
import Slider2 from '../../../public/images/blog-pic2.png';
import Slider3 from '../../../public/images/blog-pic3.png';

class StoreSlider extends Component {
    render() {
        const setting = {
            controls: false,
        }
        return (
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default StoreSlider;