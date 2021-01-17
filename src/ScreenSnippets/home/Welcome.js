import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <section className="welcome" style={{ height: '550px' }}>
                <div className="w-100 h-100">
                    <img className="w-100 h-100" src="../images/Home/welcome.png" alt="" />
                </div>
            </section >
        )
    }
}

export default Welcome;