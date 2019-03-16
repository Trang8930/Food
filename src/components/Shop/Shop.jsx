import React, { Component } from 'react';

var dataCoffee = [
  {
    "image" : "images/menu-1.jpg",
    "ttl" : "Coffee Capuccino",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
  {
    "image" : "images/menu-2.jpg",
    "ttl" : "Hot Cake Honey",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
  {
    "image" : "images/menu-3.jpg",
    "ttl" : "Hot Cake Honey",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
  {
    "image" : "images/menu-4.jpg",
    "ttl" : "Hot Cake Honey",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
]

var dataDish = [
  {
    "image" : "images/dish-1.jpg",
    "ttl" : "Coffee Capuccino",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
  {
    "image" : "images/dish-2.jpg",
    "ttl" : "Hot Cake Honey",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
  {
    "image" : "images/dish-3.jpg",
    "ttl" : "Hot Cake Honey",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
  {
    "image" : "images/dish-4.jpg",
    "ttl" : "Hot Cake Honey",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
  {
    "image" : "images/dish-5.jpg",
    "ttl" : "Hot Cake Honey",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
  {
    "image" : "images/dish-6.jpg",
    "ttl" : "Hot Cake Honey",
    "sub" : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    "price" : "$2.90"
  },
]

var coffee = dataCoffee.map((item01) => 
        <div className="col-md-3">
          <div className="menu-entry">
            <a href="#" className="img"><img src={process.env.PUBLIC_URL+item01["image"]}/></a>
            <div className="text text-center pt-4">
              <h3><a href="product-single.html">{item01["ttl"]}</a></h3>
              <p>{item01["sub"]}</p>
              <p className="price"><span>{item01["price"]}</span></p>
              <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
            </div>
          </div>
        </div>
);

var menuDish = dataDish.map((item02) => 
      <div className="col-md-4 text-center">
        <div className="menu-wrap">
          <a href="#" className="menu-img img mb-4"><img src={process.env.PUBLIC_URL+item02["image"]}/></a>
          <div className="text">
            <h3><a href="product-single.html">{item02["ttl"]}</a></h3>
            <p>{item02["sub"]}</p>
            <p className="price"><span>{item02["price"]}</span></p>
            <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
          </div>
        </div>
      </div>
);
class Shop extends Component {
  render() {
    return (
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
                        {coffee}
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                      <div className="row">
                        {menuDish}
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                      <div className="row">
                        {menuDish}
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                      <div className="row">
                        {menuDish}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Shop;