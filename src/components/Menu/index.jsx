import React, { Component } from 'react';
import Bar from '../Header';
import Footer from '../Footer';
import Slider from '../Slider/Slider';
import Ourproduct from './Ourproduct';

class Menus extends Component {
    render() {
        return (
            <React.Fragment>
                <Bar />
                <Slider title="Menu" breadcrumbstitle="Menu"></Slider>
                <Ourproduct />
                <Footer />
            </React.Fragment>

        );
    }
}

export default Menus;