import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component';
import './App.css'
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component'

class App extends React.Component {

render(){	
	return(
		<div>
			<Header/>
			<Switch>
				<Route exact path='/' component={ShopPage}/>
				<Route exact path='/checkout' component={CheckOutPage}/>
			</Switch>
		</div>
		);
	}
}

export default App;
