import React, { Component } from 'react';
import Bar from '../Header';
import Footer from '../Footer';
import Slider from '../Slider/Slider'
import Shop from './Shop';

class Shops extends Component { 
    render() {
        return (
            <React.Fragment>
                <Bar />
                <Slider title="Order Online" breadcrumbstitle="Order Online"></Slider>
                <Shop /> 
                <Footer />
              </React.Fragment>

        );
    }
}

export default Shops;