import React, { Component } from 'react';
import Bar from '../Header';
import Footer from '../Footer';
import Slider from '../Slider/Slider';
import Service from '../Service/Service';


class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Bar />
                <Slider title="Services" breadcrumbstitle="Services"></Slider>
                <Service />
                <Footer />
            </React.Fragment>

        );
    }
}

export default Services;