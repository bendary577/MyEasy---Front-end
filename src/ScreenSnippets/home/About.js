import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="about" id="about">
                <div className="container mt-5 mb-5">
                    <div className="">
                        <div className="text-center">
                            <h2 className="mb-4">ABOUT MY EASY</h2>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-lg-6">
                                <img className="w-100 h-100" src="../images/about-pic.png" alt="" />
                            </div>
                            <div className="col-xs-12 col-lg-6">
                                <h3 className="mb-4">We Believe</h3>
                                <p className="mb-4">Trusted comes with tons of custom widgets, color options, font
                                        control and much more.</p>
                                <p className="mb-4">We aim to eliminate the task of dividing your project between different agency, corporate and business template. We are a company that offers services for our clients to solve problems and planing strategies for humanity all over the world.</p>
                                <a className="btn btn-dark" href="" style={{
                                    width: '30%', borderRadius: '30px'
                                }}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default About;