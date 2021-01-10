import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer footer--bg">
                <div className="container">
                    <div className="page-section">
                        <div className="row gutters-100">
                            <div className="col-md-4 col-lg-3">
                                <div className="footer__first">
                                    <h2 className="footer__title">DART AGENCY</h2>
                                    <p className="footer-first__paragraph">
                                        Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore </p>
                                    <ul className="footer-first__social-icons">
                                        <li><a href=""><i className="flaticon-facebook-letter-logo"></i></a></li>
                                        <li><a href=""><i className="flaticon-twitter-logo"></i></a></li>
                                        <li><a href=""><i className="flaticon-dribbble-logo"></i></a></li>
                                        <li><a href=""><i className="flaticon-behance-logo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="footer__second">
                                    <h2 className="footer__title">QUICK LINK</h2>
                                    <ul>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">About Us</a></li>
                                        <li><a href="">Service</a></li>
                                        <li><a href="">Blog</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="footer__third">
                                    <h2 className="footer__title">CONTACT US</h2>
                                    <ul>
                                        <li><span className="glyphicon glyphicon-envelope"></span> <a href="#">dartagency@gmail.com</a></li>
                                        <li><span className="glyphicon glyphicon-earphone"></span> <a href="#">+0123-345-6789</a></li>
                                    </ul>
                                    <h4 className="footer__subscribe__title">Subscribe</h4>
                                    <div className="subscribe-section">
                                        <input type="email" className="form-control" size="50" placeholder="Enter Your Email" required />
                                        <button className="subscribe-section__button" type="button"><img src="../images/send-icon.png" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="footer__fourth">
                                    <h4 className="footer__title">INSTAGRAM</h4>
                                    <div className="row">
                                        <ul>
                                            <li><a href=""><img src="../images/instagram-pic1.png" alt="" /></a></li>
                                            <li><a href=""><img src="../images/instagram-pic2.png" alt="" /></a></li>
                                            <li><a href=""><img src="../images/instagram-pic3.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul>
                                            <li><a href=""><img src="../images/instagram-pic4.png" alt="" /></a></li>
                                            <li><a href=""><img src="../images/instagram-pic5.png" alt="" /></a></li>
                                            <li><a href=""><img src="../images/instagram-pic6.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        < hr className="footer__horizontal-bar" />
                        <p className="footer__bottom-paragraph">
                            &copy; Copyright 2021
                            <a href="" style={{ color: "#00aafe", fontWeight: "bold" }}> Matsuda-Design</a>
                            . All Rights Reserved
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer;