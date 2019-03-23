import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/index';
import Menu from './components/Menu/index';
import Service from './components/Service/index';
import Blog from './components/Blog/index';
import About from './components/About/index';
import Shop from './components/Shop/index';
import ProductSingle from './components/ProductSingle/index';
import Cart from './components/Cart/index';
import Checkout from './components/Checkout/index';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Seller from './components/Seller/index';
import YourProduct from './components/YourProduct/index';
import EditItem from './components/Seller/EditItem';
import AddItem from './components/Seller/AddItem';
import Profile from './components/Profile/Profile';


class Com extends Component {
	render() {
		return (
	    <Router>
	        <Switch>
	            <Route path = '/' exact component = { Home } />
	            <Route path = '/Menu'  component = { Menu } />
	            <Route path = '/Service'  component = { Service } />
	            <Route path = '/Blog'  component = { Blog } />
	            <Route path = '/About'  component = { About } />
	            <Route path = '/Shop'  component = { Shop } />
	            <Route path = '/ProductSingle'  component = { ProductSingle } />
	            <Route path = '/Cart'  component = { Cart } />
	            <Route path = '/Checkout'  component = { Checkout } />
	            <Route path = '/Login'  component = { Login } />
				<Route path = '/Register'  component = { Register } />
				<Route path = '/Seller' component = { Seller } />
				<Route path = '/YourProduct' component = { YourProduct } />
				<Route path = '/EditItem' component = { EditItem } />
				<Route path = '/AddItem' component = { AddItem } />
				<Route path = '/Profile' component = { Profile } />
	        </Switch>
    	</Router>
		);
	}
}

export default Com;