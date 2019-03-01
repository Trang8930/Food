import React, { Component } from 'react';

class Cart extends Component {
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
            <h1 className="mb-3 mt-5 bread">Cart</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section ftco-cart">
    <div className="container">
      <div className="row">
        <div className="col-md-12 ftco-animate">
          <div className="cart-list">
            <table className="table">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="icon-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/menu-2.jpg)'}} /></td>
                  <td className="product-name">
                    <h3>Creamy Latte Coffee</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </td>
                  <td className="price">$4.90</td>
                  <td className="quantity">
                    <div className="input-group mb-3">
                      <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                    </div>
                  </td>
                  <td className="total">$4.90</td>
                </tr>{/* END TR*/}
                <tr className="text-center">
                  <td className="product-remove"><a href="#"><span className="icon-close" /></a></td>
                  <td className="image-prod"><div className="img" style={{backgroundImage: 'url(images/dish-2.jpg)'}} /></td>
                  <td className="product-name">
                    <h3>Grilled Ribs Beef</h3>
                    <p>Far far away, behind the word mountains, far from the countries</p>
                  </td>
                  <td className="price">$15.70</td>
                  <td className="quantity">
                    <div className="input-group mb-3">
                      <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                    </div>
                  </td>
                  <td className="total">$15.70</td>
                </tr>{/* END TR*/}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col col-lg-3 col-md-6 mt-5 cart-wrap ftco-animate">
          <div className="cart-total mb-3">
            <h3>Cart Totals</h3>
            <p className="d-flex">
              <span>Subtotal</span>
              <span>$20.60</span>
            </p>
            <p className="d-flex">
              <span>Delivery</span>
              <span>$0.00</span>
            </p>
            <p className="d-flex">
              <span>Discount</span>
              <span>$3.00</span>
            </p>
            <hr />
            <p className="d-flex total-price">
              <span>Total</span>
              <span>$17.60</span>
            </p>
          </div>
          <p className="text-center"><a href="checkout.html" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
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

export default Cart;