import React, { Component } from 'react';
import Bar from '../Header';
import Footer from '../Footer';
import Slider from '../Slider/Slider'
import Checkout from './Checkout';

class Checkouts extends Component {
    render() {
        return (
            <React.Fragment>
              <Bar />
              <Slider title="Checkout" breadcrumbstitle="Checkout"></Slider>
              <Checkout />
              <Footer />
            </React.Fragment>

        );
    }
}

export default Checkouts;