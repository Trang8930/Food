import React, { Component } from 'react';
import Bar from '../Header/index.jsx'
import Footer from '../Footer/index.jsx'

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

var data = [{
   "date": "Sept 28, 2018",
   "user": "Admin",
   "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
   "title": "Coffee Testing Day",
   "image": "images/image_1.jpg"
},
{
   "date": "Sept 29, 2018",
   "user": "Admin",
   "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
   "title": "Coffee Testing Day",
   "image": "images/image_1.jpg"
},
{
   "date": "Sept 30, 2018",
   "user": "Admin",
   "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
   "title": "Coffee Testing Day",
   "image": "images/image_1.jpg"
},
{
   "date": "Sept 31, 2018",
   "user": "Admin",
   "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
   "title": "Coffee Testing Day",
   "image": "images/image_1.jpg"
},
{
   "date": "Sept 32, 2018",
   "user": "Admin",
   "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
   "title": "Coffee Testing Day",
   "image": "images/image_1.jpg"
},
{
   "date": "Sept 33, 2018",
   "user": "Admin",
   "content": "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
   "title": "Coffee Testing Day",
   "image": "images/image_1.jpg"
}
]


var elements = data.map((item) =>
    <div className="col-md-4 d-flex ftco-animate">
        <div className="blog-entry align-self-stretch">
          <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
          </a>
          <div className="text py-4 d-block">
            <div className="meta">
              <div><a href="#">{item["date"]}</a></div>
              <div><a href="#">{item["user"]}</a></div>
              <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
            </div>
            <h3 className="heading mt-2"><a href="#">{item["title"]}</a></h3>
            <p>{item["content"]}</p>
          </div>
        </div>
      </div>
  );

class Blog extends Component {

    componentDidMount(){
      carousel();
      contentWayPoint();
    }

    render() {
        return (
            <>
                {/* MENU BAR */}
                <Bar/>

                {/* END nav */}
                <section className="home-slider owl-carousel">
                  <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                      <div className="row slider-text justify-content-center align-items-center">
                        <div className="col-md-7 col-sm-12 text-center ftco-animate">
                          <h1 className="mb-3 mt-5 bread">Blog</h1>
                          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="ftco-section">
                  <div className="container">
                    <div className="row d-flex">
                      {elements}
                    </div>
                    <div className="row mt-5">
                      <div className="col text-center">
                        <div className="block-27">
                          <ul>
                            <li><a href="#">&lt;</a></li>
                            <li className="active"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">&gt;</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              
                <Footer/>
            </>
        );
    }
}

export default Blog;