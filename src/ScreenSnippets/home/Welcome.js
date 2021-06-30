import React, { Component } from 'react';
import app7 from "../../../public/images/Home/app7.png"
import { withTranslation } from 'react-i18next';

class Welcome extends Component {

    render() {

        const { t } = this.props;

        const image = {
            width:630,
            height:600
        };

        return (
            <section className="welcome">
                <div className="container w-100 h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h2 className="text-white animate__animated animate__backInLeft delay-2s">{t('home.welcome.welcome')}</h2> 
                                <a href="/signup" className=" btn btn-lg btn-success mt-5 animate__animated animate__backInLeft delay-2s">{t('home.welcome.start_now')}</a>
                            </div>  
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img className="" src={app7} style={image} alt="" />
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default withTranslation()(Welcome);
