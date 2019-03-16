import React, { Component } from 'react';
import Bar from '../Header/index.jsx'
import Footer from '../Footer/index.jsx'
import Blog from '../Blog/Blog';
import Slider from '../Slider/Slider.jsx';

class Blogs extends Component {
    render() {
        return (
            <>
                <Bar/>
                <Slider title="Blog" breadcrumbstitle="Blog"></Slider>
                <Blog />
                <Footer/>
            </>
        );
    }
}

export default Blogs;