
import React, { Component } from "react";
import Facebook from "../../../public/icons/social media/facebook.png";
import Instagram from "../../../public/icons/social media/instagram.png";
import Twitter from "../../../public/icons/social media/twitter.png";
import Pinterest from "../../../public/icons/social media/pinterest.png";
import GooglePlus from "../../../public/icons/social media/google-plus.png";
import PlayStore from "../../../public/icons/social media/playstore.png";

class Footer extends Component {
    render() {
        const socialMediaIconsStyle = {
            width : 30,
            height : 30
        };
        
        return (
            <div className="">
                <div className="footer" style={{backgroundColor:"lightgray"}}>
                    <div className="container pb-5">
                        <div className="page-section">
                            <div className="row gutters-100">

                                {/* ------------------------------ products categories -------------------------------------- */}

                                <div className="col-md-4 col-lg-3">
                                    <div className="footer__first">
                                        <h2 className="footer__title text-dark">Products Categories</h2>
                                        <ul className="footer-first__social-icons">
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                            <li><a href="" className="text-dark">Eloctronics</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ------------------------------ quick link -------------------------------------- */}

                                <div className="col-md-6 col-lg-2">
                                    <div className="footer__second">
                                        <h2 className="footer__title text-dark">QUICK LINK</h2>
                                        <ul>
                                            <li><a href="" className="text-dark">Home</a></li>
                                            <li><a href="" className="text-dark">About Us</a></li>
                                            <li><a href="" className="text-dark">Service</a></li>
                                            <li><a href="" className="text-dark">Blog</a></li>
                                            <li><a href="" className="text-dark">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* ------------------------------ contact us -------------------------------------- */}

                                <div className="col-md-6 col-lg-3">
                                    <div className="footer__third">
                                        <h2 className="footer__title text-dark">CONTACT US</h2>
                                        <ul>
                                            <li><span className="glyphicon glyphicon-envelope "></span> <a href="#" className="text-dark">dartagency@gmail.com</a></li>
                                            <li><span className="glyphicon glyphicon-earphone"></span> <a href="#" className="text-dark">+0123-345-6789</a></li>
                                        </ul>
                                        <h4 className="footer__subscribe__title text-dark">Subscribe To Our Newsletter</h4>
                                        <div className="subscribe-section">
                                            <input type="email" className="form-control" size="50" placeholder="Enter Your Email" required />
                                            <button className="subscribe-section__button" type="button"><img src="../images/send-icon.png" alt="" /></button>
                                        </div>
                                    </div>
                                </div>

                                {/* ------------------------------ social media -------------------------------------- */}

                                <div className="col-md-6 col-lg-4">
                                    <div className="footer__fourth">
                                        <h4 className="footer__title text-dark">Follow Us On Social Media</h4>
                                        <div className="icons">
                                            <ul>
                                                <li><a href=""><img src={Facebook} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                                <li><a href=""><img src={Instagram} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                                <li><a href=""><img src={Twitter} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                                <li><a href=""><img src={Pinterest} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                                <li><a href=""><img src={GooglePlus} style={socialMediaIconsStyle} className="mx-2" alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer__fourth">
                                        <h4 className="footer__title text-dark">Download Our App</h4>
                                        <img src={PlayStore} style={socialMediaIconsStyle} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="bg-dark" style={{height:80}}>
                    <p className="footer__bottom-paragraph text-white">
                         &copy; Copyright 2021
                        <a href="" style={{ color: "#00aafe", fontWeight: "bold" }}> MyEasy </a>
                        . All Rights Reserved
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;