import React, { Component } from 'react';

class ProductSingle extends Component {
    render() {
        return (
            <React.Fragment>
  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html">Coffee<small>Blend</small></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="menu.html" className="nav-link">Menu</a></li>
          <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="room.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="shop.html">Shop</a>
              <a className="dropdown-item" href="product-single.html">Single Product</a>
              <a className="dropdown-item" href="cart.html">Cart</a>
              <a className="dropdown-item" href="checkout.html">Checkout</a>
            </div>
          </li>
          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
          <li className="nav-item cart"><a href="cart.html" className="nav-link"><span className="icon icon-shopping_cart" /><span className="bag d-flex justify-content-center align-items-center"><small>1</small></span></a></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section className="home-slider owl-carousel">
    <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}} data-stellar-background-ratio="0.5">
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text justify-content-center align-items-center">
          <div className="col-md-7 col-sm-12 text-center ftco-animate">
            <h1 className="mb-3 mt-5 bread">Product Detail</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Product Detail</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-5 ftco-animate">
          <a href="images/menu-2.jpg" className="image-popup"><img src="images/menu-2.jpg" className="img-fluid" alt="Colorlib Template" /></a>
        </div>
        <div className="col-lg-6 product-details pl-md-5 ftco-animate">
          <h3>Creamy Latte Coffee</h3>
          <p className="price"><span>$4.90</span></p>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
          </p>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="form-group d-flex">
                <div className="select-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down" /></div>
                  <select name id className="form-control">
                    <option value>Small</option>
                    <option value>Medium</option>
                    <option value>Large</option>
                    <option value>Extra Large</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-100" />
            <div className="input-group col-md-6 d-flex mb-3">
              <span className="input-group-btn mr-2">
                <button type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                  <i className="icon-minus" />
                </button>
              </span>
              <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} min={1} max={100} />
              <span className="input-group-btn ml-2">
                <button type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                  <i className="icon-plus" />
                </button>
              </span>
            </div>
          </div>
          <p><a href="cart.html" className="btn btn-primary py-3 px-5">Add to Cart</a></p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <span className="subheading">Discover</span>
          <h2 className="mb-4">Related products</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="menu-entry">
            <a href="#" className="img" style={{backgroundImage: 'url(images/menu-1.jpg)'}} />
            <div className="text text-center pt-4">
              <h3><a href="#">Coffee Capuccino</a></h3>
              <p>A small river named Duden flows by their place and supplies</p>
              <p className="price"><span>$5.90</span></p>
              <p><a href="#" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="menu-entry">
            <a href="#" className="img" style={{backgroundImage: 'url(images/menu-2.jpg)'}} />
            <div className="text text-center pt-4">
              <h3><a href="#">Coffee Capuccino</a></h3>
              <p>A small river named Duden flows by their place and supplies</p>
              <p className="price"><span>$5.90</span></p>
              <p><a href="#" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="menu-entry">
            <a href="#" className="img" style={{backgroundImage: 'url(images/menu-3.jpg)'}} />
            <div className="text text-center pt-4">
              <h3><a href="#">Coffee Capuccino</a></h3>
              <p>A small river named Duden flows by their place and supplies</p>
              <p className="price"><span>$5.90</span></p>
              <p><a href="#" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="menu-entry">
            <a href="#" className="img" style={{backgroundImage: 'url(images/menu-4.jpg)'}} />
            <div className="text text-center pt-4">
              <h3><a href="#">Coffee Capuccino</a></h3>
              <p>A small river named Duden flows by their place and supplies</p>
              <p className="price"><span>$5.90</span></p>
              <p><a href="#" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="ftco-footer ftco-section img">
    <div className="overlay" />
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">About Us</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Recent Blog</h2>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar" /> Sept 15, 2018</a></div>
                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar" /> Sept 15, 2018</a></div>
                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Services</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">Cooked</a></li>
              <li><a href="#" className="py-2 d-block">Deliver</a></li>
              <li><a href="#" className="py-2 d-block">Quality Foods</a></li>
              <li><a href="#" className="py-2 d-block">Mixed</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
    </div>
  </footer>
</React.Fragment>

        );
    }
}

export default ProductSingle;