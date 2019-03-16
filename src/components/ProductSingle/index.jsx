import React, { Component } from 'react';
import Bar from '../Header';
import Footer from '../Footer';
import Slider from '../Slider/Slider';
import Producdetail from './Producdetail';
import Relatedproduct from './Relatedproduct';

class ProductSingle extends Component {
    render() {
        return (
            <React.Fragment>
              <Bar />
              <Slider title="Product Detail" breadcrumbstitle="Product Detail"></Slider>
              <Producdetail />
              <Relatedproduct />
              <Footer />
          </React.Fragment>

        );
    }
}

export default ProductSingle;