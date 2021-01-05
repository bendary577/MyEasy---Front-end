import React, { Component } from 'react';
import AboutImage from '../../../public/images/Welcome/2.jpeg';

class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-12 text-center">
                            <h1>OUR COMPANY</h1>
                        </div>
                        <div className="col-12 text-center">
                            <p>We can make you happy by introducing our items.</p>
                        </div>
                        <div className="col-12 text-center">
                            <p>
                                Consexc fdklnjvjkbhsdf dfvhsd dfvsdf sdfg dsfg dsfgsdf
                                sdfgdfgdf sdfgsdgsd sdfgsdfgg dsvsdg sgdfgs sdgsdg sdgsdg sdgsdg sdg.
                            </p>
                        </div>
                        <div className="col-xs-12 col-lg-6 m-auto image">
                            <img src={AboutImage} className="w-100 h-100" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;