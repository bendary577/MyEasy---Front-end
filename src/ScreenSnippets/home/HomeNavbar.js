import React, { Component } from "react";
import "../../../public/css/accnavbar.css";
import logo from '../../../public/images/Home/myeasy-logo.png';
import LanguageSwitcher from "../../Components/Buttons/LanguageSwitcher";
import { withTranslation } from 'react-i18next';
class HomeNavbar extends Component {


    constructor(props){
        super(props);
    }


    render() {

        const { t } = this.props;

        const logoStyle = {
            width: 90,
            height: 90,
            marginTop : 5
          };

        return (

            <nav className="topnavigation navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="col-md-3">
                        {/*------------------------- brand logo ----------------------------------------------*/}
                        <a className="navbar-brand font-weight-bold" href="#">
                            <img src={logo} alt="Logo"  style={logoStyle}/>
                            My Easy
                        </a>
                    </div>
                    <div className="col-md-9">
                        <div class="container d-flex justify-content-end">
                        {/*------------------------- collapsing button ---------------------------------------*/}

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/*------------------------- nav links ----------------------------------------------*/}

                        <div className="collapse navbar-collapse accLinks" id="collapsibleNavbar">
                            <ul className="navbar-nav mr-3">
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#services">{t('home.navbar.services')}</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/#about">{t('home.navbar.aboutus')}</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#offers">{t('home.navbar.offers')}</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#contacts">{t('home.navbar.contacts')}</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/privacypolicy">{t('home.navbar.privacy_policy')}</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/termsofservice"> {t('home.navbar.terms_of_service')}</a>
                                </li>
                                <li className="nav-item mx-2 mt-2">
                                    <LanguageSwitcher />
                                </li>
                            </ul>    
                            <a className="btn btn-sm btn-success mt-2 mx-3" href="/signin">{t('home.navbar.login')}</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default withTranslation()(HomeNavbar);

