import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Welcome1 from '../../../public/images/Welcome/1.jpeg';
import Welcome2 from '../../../public/images/Welcome/2.jpeg';
import Welcome3 from '../../../public/images/Welcome/3.jpeg';

class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100 h-100" src={Welcome1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 h-100" src={Welcome2} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 h-100" src={Welcome3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Welcome;