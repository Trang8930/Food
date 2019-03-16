import React, { Component } from 'react';
import Bar from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
import Ourstory from './Ourstory.jsx';
import Customersay from './Customersay.jsx';
import Ourmenu from './Ourmenu.jsx';
import Overlay from './Overlay.jsx';
import Slider from '../Slider/Slider.jsx';


class About extends Component {
    render() {
        return (
            <React.Fragment>
            <Bar />
            <Slider title="About" breadcrumbstitle="About"></Slider>
            <Ourstory />
            <Customersay />
            <Ourmenu />
            <Overlay />
            <Footer />
          </React.Fragment>
          
        );
    }
}

export default About;