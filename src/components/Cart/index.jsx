import React, { Component } from 'react';
import Bar from '../Header';
import Footer from '../Footer';
import Relatedproduct from '../ProductSingle/Relatedproduct';
import Cart from './Cart';

class Carts extends Component {
    render() {
        return (
            <React.Fragment>
              <Bar />
              <Cart />
              <Footer />
            </React.Fragment>
        );
    }
}

export default Carts;