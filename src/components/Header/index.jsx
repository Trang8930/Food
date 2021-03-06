import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Bar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
              <NavLink className="navbar-brand" to="/">Food<small>Ordering</small></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu" /> Menu
              </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item search">
                    <input placeholder="Search Foods" class="search-input" type="text" value=""></input>
                    <img src="./images/btn-search.png" alt="" className="img-search"/>
                    {/* <Search/>
                      placeholder="Search Foods"
                      onSearch={value => console.log(value)}
                      style={{ width: 200 
                      }}
                    /> */}
                    <br />
                  </li>
                  <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                  <li className="nav-item"><NavLink to="/Service" className="nav-link">Services</NavLink></li>
                  <li className="nav-item"><NavLink to="/About" className="nav-link">About</NavLink></li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/Shop" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</NavLink>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <NavLink className="dropdown-item" to="/Shop">Shop</NavLink>
                      <NavLink className="dropdown-item" to="/ProductSingle">Single Product</NavLink>
                      <NavLink className="dropdown-item" to="/Cart">Cart</NavLink>
                      <NavLink className="dropdown-item" to="/Checkout">Checkout</NavLink>
                    </div>
                  </li>
                  <li className="nav-item active"><NavLink to="/Login" className="nav-link">Login</NavLink></li>
                  <li className="nav-item cart"><NavLink to="/Cart" className="nav-link"><span className="icon icon-shopping_cart" /><span className="bag d-flex justify-content-center align-items-center"><small>1</small></span></NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
        );
     }
 }
 export default Bar