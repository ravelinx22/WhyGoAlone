import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./containers/sign_up";
import SignIn from "./containers/sign_in";
import Home from "./containers/home";
import PlaceList from "./containers/place_list"
import PlaceDetail from "./containers/place_detail"

ReactDOM.render(
	<Router>
		<App>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/signUp" component={SignUp}/>
				<Route exact path="/signIn" component={SignIn}/>
				<Route path="/places" component={PlaceList}/>
				<Route path="/place" component={PlaceDetail}/>
			</Switch>
		</App>
	</Router>
	,document.getElementById('app'));
