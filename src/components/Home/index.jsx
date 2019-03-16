import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Bar from '../Header/index.jsx';
import Service from '../Service/Service.jsx'
import Ourstory from '../About/Ourstory.jsx';
import Ourmenu from '../About/Ourmenu.jsx';
import Overlay from '../About/Overlay.jsx';
import Customersay from '../About/Customersay.jsx';
import Ourproduct from '../Menu/Ourproduct.jsx';
import SliderHome from './SliderHome.jsx';
import RecentBlog from './RecentBlog.jsx';
import Footer from '../Footer/index.jsx';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Bar/>
                <SliderHome />
                <Ourproduct />
                <Service />
                <Ourmenu />
                <Overlay />
                <RecentBlog />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;