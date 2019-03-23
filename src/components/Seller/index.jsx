import React, { Component } from 'react';
import BarSeller from './BarSeller';
import SliderHome from '../Home/SliderHome';
import YourProduct from '../YourProduct/YourProduct';
import Service from '../Service/Service';
import Ourmenu from '../About/Ourmenu';
import Overlay from '../About/Overlay';
import RecentBlog from '../Home/RecentBlog';
import Footer from '../Footer';


class Sellers extends Component {
    render() {
        return (
            <>
                <BarSeller />
                <SliderHome />
                <YourProduct />
                <Service />
                <Ourmenu />
                <Overlay />
                <RecentBlog />
                <Footer />
            </>
        );
    }
}

export default Sellers;