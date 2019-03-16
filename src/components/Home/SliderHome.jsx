import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

var carousel = function() {
    global.$('.home-slider').owlCarousel({
      loop:true,
      autoplay: true,
      margin:0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav:false,
      autoplayHoverPause: false,
      items: 1,
      navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
      responsive:{
        0:{
          items:1,
          nav:false
        },
        600:{
          items:1,
          nav:false
        },
        1000:{
          items:1,
          nav:false
        }
      }
    });
    global.$('.carousel-work').owlCarousel({
      autoplay: true,
      center: true,
      loop: true,
      items:1,
      margin: 30,
      stagePadding:0,
      nav: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive:{
        0:{
          items: 1,
          stagePadding: 0
        },
        600:{
          items: 2,
          stagePadding: 50
        },
        1000:{
          items: 3,
          stagePadding: 100
        }
      }
    });
  };

  var contentWayPoint = function() {
    var i = 0;
    global.$('.ftco-animate').waypoint( function( direction ) {

      if( direction === 'down' && !global.$(this.element).hasClass('ftco-animated') ) {

        i++;

        global.$(this.element).addClass('item-animate');
        setTimeout(function(){

          global.$('body .ftco-animate.item-animate').each(function(k){
            var el = global.$(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }
              el.removeClass('item-animate');
            },  k * 50, 'easeInOutExpo' );
          });

        }, 100);

      }

    } , { offset: '95%' } );
  };

class SliderHome extends Component {
    componentDidMount(){
        carousel();
        contentWayPoint();
    }
    render() {
        return (
            <section className="home-slider owl-carousel">
                <div className="slider-item" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                    <div className="col-md-8 col-sm-12 text-center ftco-animate">
                        <span className="subheading">Welcome to</span>
                        <h1 className="mb-4">Food Ordering</h1>
                        <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <NavLink to="/Menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</NavLink></p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="slider-item" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                    <div className="col-md-8 col-sm-12 text-center ftco-animate">
                        <span className="subheading">Welcome to</span>
                        <h1 className="mb-4">Food Ordering</h1>
                        <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <NavLink to="/Menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</NavLink></p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                    <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                    <div className="col-md-8 col-sm-12 text-center ftco-animate">
                        <span className="subheading">Welcome to</span>
                        <h1 className="mb-4">Food Ordering</h1>
                        <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <NavLink to="/Menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</NavLink></p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default SliderHome;