import React, { Component } from 'react';

class Checkout extends Component {
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
            <h1 className="mb-3 mt-5 bread">Checkout</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Checout</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 ftco-animate">
          <form action="#" className="billing-form ftco-bg-dark p-3 p-md-5">
            <h3 className="mb-4 billing-heading">Billing Details</h3>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstname">Firt Name</label>
                  <input type="text" className="form-control" placeholder />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" className="form-control" placeholder />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="country">State / Country</label>
                  <div className="select-wrap">
                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                    <select name id className="form-control">
                      <option value>France</option>
                      <option value>Italy</option>
                      <option value>Philippines</option>
                      <option value>South Korea</option>
                      <option value>Hongkong</option>
                      <option value>Japan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="streetaddress">Street Address</label>
                  <input type="text" className="form-control" placeholder="House number and street name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Appartment, suite, unit etc: (optional)" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="towncity">Town / City</label>
                  <input type="text" className="form-control" placeholder />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="postcodezip">Postcode / ZIP *</label>
                  <input type="text" className="form-control" placeholder />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" className="form-control" placeholder />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="emailaddress">Email Address</label>
                  <input type="text" className="form-control" placeholder />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group mt-4">
                  <div className="radio">
                    <label className="mr-3"><input type="radio" name="optradio" /> Create an Account? </label>
                    <label><input type="radio" name="optradio" /> Ship to different address</label>
                  </div>
                </div>
              </div>
            </div>
          </form>{/* END */}
          <div className="row mt-5 pt-3 d-flex">
            <div className="col-md-6 d-flex">
              <div className="cart-detail cart-total ftco-bg-dark p-3 p-md-4">
                <h3 className="billing-heading mb-4">Cart Total</h3>
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
            </div>
            <div className="col-md-6">
              <div className="cart-detail ftco-bg-dark p-3 p-md-4">
                <h3 className="billing-heading mb-4">Payment Method</h3>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label><input type="radio" name="optradio" className="mr-2" /> Direct Bank Tranfer</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label><input type="radio" name="optradio" className="mr-2" /> Check Payment</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label><input type="radio" name="optradio" className="mr-2" /> Paypal</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="checkbox">
                      <label><input type="checkbox" defaultValue className="mr-2" /> I have read and accept the terms and conditions</label>
                    </div>
                  </div>
                </div>
                <p><a href="#" className="btn btn-primary py-3 px-4">Place an order</a></p>
              </div>
            </div>
          </div>
        </div> {/* .col-md-8 */}
        <div className="col-xl-4 sidebar ftco-animate">
          <div className="sidebar-box">
            <form action="#" className="search-form">
              <div className="form-group">
                <div className="icon">
                  <span className="icon-search" />
                </div>
                <input type="text" className="form-control" placeholder="Search..." />
              </div>
            </form>
          </div>
          <div className="sidebar-box ftco-animate">
            <div className="categories">
              <h3>Categories</h3>
              <li><a href="#">Tour <span>(12)</span></a></li>
              <li><a href="#">Hotel <span>(22)</span></a></li>
              <li><a href="#">Coffee <span>(37)</span></a></li>
              <li><a href="#">Drinks <span>(42)</span></a></li>
              <li><a href="#">Foods <span>(14)</span></a></li>
              <li><a href="#">Travel <span>(140)</span></a></li>
            </div>
          </div>
          <div className="sidebar-box ftco-animate">
            <h3>Recent Blog</h3>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_3.jpg)'}} />
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                  <div><a href="#"><span className="icon-person" /> Admin</a></div>
                  <div><a href="#"><span className="icon-chat" /> 19</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-box ftco-animate">
            <h3>Tag Cloud</h3>
            <div className="tagcloud">
              <a href="#" className="tag-cloud-link">dish</a>
              <a href="#" className="tag-cloud-link">menu</a>
              <a href="#" className="tag-cloud-link">food</a>
              <a href="#" className="tag-cloud-link">sweet</a>
              <a href="#" className="tag-cloud-link">tasty</a>
              <a href="#" className="tag-cloud-link">delicious</a>
              <a href="#" className="tag-cloud-link">desserts</a>
              <a href="#" className="tag-cloud-link">drinks</a>
            </div>
          </div>
          <div className="sidebar-box ftco-animate">
            <h3>Paragraph</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
          </div>
        </div>
      </div>
    </div>
  </section> {/* .section */}
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

export default Checkout;