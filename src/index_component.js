import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Service from './components/Service/Service';
import Blog from './components/Blog/Blog';
// import BlogSingle from './components/Blog/Blog-single/BlogSingle';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import ProductSingle from './components/Shop/ProductSingle/ProductSingle';
import Cart from './components/Shop/Cart/Cart';
import Checkout from './components/Shop/Checkout/Checkout';
import Contact from './components/Contact/Contact';


class Com extends Component {
	render() {
		return (
	    <Router>
	        <Switch>
	            <Route path = '/Home' exact component = { Home } />
	            <Route path = '/Menu' exact component = { Menu } />
	            <Route path = '/Service' exact component = { Service } />
	            <Route path = '/Blog' exact component = { Blog } />
	            {/* <Route path = '/BlogSingle' exact component = { BlogSingle } /> */}
	            <Route path = '/About' exact component = { About } />
	            <Route path = '/Shop' exact component = { Shop } />
	            <Route path = '/ProductSingle' exact component = { ProductSingle } />
	            <Route path = '/Cart' exact component = { Cart } />
	            <Route path = '/Checkout' exact component = { Checkout } />
	            <Route path = '/Contact' exact component = { Contact } />
	        </Switch>
    	</Router>
		);
	}
}

export default Com;