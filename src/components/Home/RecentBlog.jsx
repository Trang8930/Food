import React, { Component } from 'react';
import Blog from '../Blog/Blog.jsx';

class RecentBlog extends Component {
    render() {
        return (
            <section className="ftco-section">
                <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                    <h2 className="mb-4">Recent from blog</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <Blog />
                </div>
            </section>
        );
    }
}

export default RecentBlog;