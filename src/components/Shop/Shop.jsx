import React, { Component } from 'react';

class Shop extends Component {
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
            <h1 className="mb-3 mt-5 bread">Order Online</h1>
            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Shop</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-menu mb-5 pb-5">
    <div className="container">
      <div className="row d-md-flex">
        <div className="col-lg-12 ftco-animate p-md-5">
          <div className="row">
            <div className="col-md-12 nav-link-wrap mb-5">
              <div className="nav ftco-animate nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-0-tab" data-toggle="pill" href="#v-pills-0" role="tab" aria-controls="v-pills-0" aria-selected="true">Coffee</a>
                <a className="nav-link" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="false">Main Dish</a>
                <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>
                <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Desserts</a>
              </div>
            </div>
            <div className="col-md-12 d-flex align-items-center">
              <div className="tab-content ftco-animate" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-0" role="tabpanel" aria-labelledby="v-pills-0-tab">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="menu-entry">
                        <a href="#" className="img" style={{backgroundImage: 'url(images/menu-1.jpg)'}} />
                        <div className="text text-center pt-4">
                          <h3><a href="product-single.html">Coffee Capuccino</a></h3>
                          <p>A small river named Duden flows by their place and supplies</p>
                          <p className="price"><span>$5.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="menu-entry">
                        <a href="#" className="img" style={{backgroundImage: 'url(images/menu-2.jpg)'}} />
                        <div className="text text-center pt-4">
                          <h3><a href="product-single.html">Coffee Capuccino</a></h3>
                          <p>A small river named Duden flows by their place and supplies</p>
                          <p className="price"><span>$5.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="menu-entry">
                        <a href="#" className="img" style={{backgroundImage: 'url(images/menu-3.jpg)'}} />
                        <div className="text text-center pt-4">
                          <h3><a href="product-single.html">Coffee Capuccino</a></h3>
                          <p>A small river named Duden flows by their place and supplies</p>
                          <p className="price"><span>$5.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="menu-entry">
                        <a href="#" className="img" style={{backgroundImage: 'url(images/menu-4.jpg)'}} />
                        <div className="text text-center pt-4">
                          <h3><a href="product-single.html">Coffee Capuccino</a></h3>
                          <p>A small river named Duden flows by their place and supplies</p>
                          <p className="price"><span>$5.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-1.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-2.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-3.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-4.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-5.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dish-6.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Grilled Beef</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-1.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Lemonade Juice</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-2.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Pineapple Juice</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-3.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Soda Drinks</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-4.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Lemonade Juice</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-5.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Pineapple Juice</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/drink-6.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Soda Drinks</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-1.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-2.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-3.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-4.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-5.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="menu-wrap">
                        <a href="#" className="menu-img img mb-4" style={{backgroundImage: 'url(images/dessert-6.jpg)'}} />
                        <div className="text">
                          <h3><a href="product-single.html">Hot Cake Honey</a></h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                          <p className="price"><span>$2.90</span></p>
                          <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default Shop;