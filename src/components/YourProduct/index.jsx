import React, { Component } from 'react';
import BarSeller from '../Seller/BarSeller';
import Slider from '../Slider/Slider';
import YourProduct from './YourProduct';
import Footer from '../Footer';

class index extends Component {
    render() {
        return (
            <>
                <BarSeller />
                <Slider title="Your Product" breadcrumbstitle="Your Product"></Slider>
                <YourProduct />
                <Footer />
            </>
        );
    }
}

export default index;