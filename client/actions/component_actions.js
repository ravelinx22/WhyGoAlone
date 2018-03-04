import QueryString from 'query-string';
import React from 'react';
import '../styles/styles.css';
import { PlaceItem } from '../components/place_item';
import { Container, Row, Col } from 'reactstrap';
import { PlaceHeaderList } from '../components/place_header_list.js';

export function getMyLocation(component) {
	const location = window.navigator && window.navigator.geolocation;
    const query = QueryString.parse(component.props.location.search);
	const type = query.type;

    if (location) {
      location.getCurrentPosition((position) => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		const ll = lat+","+lon;
		const nearby_url = "/api/venues/nearby?ll="+ll;
		const category_url = "/api/venues/category/" + query.category_id + "?ll="+ll;
		const  search_url = "/api/venues/search?query=" + query.query + "&near=" + query.near;
        var url = category_url;
		if(type == "nearby") {
			url = nearby_url;
		} else if(type == "search") {
			url = search_url;
		}

		console.log(url);

		fetch(url, {
			headers: new Headers({
				"x-access-token": localStorage.getItem('token'),
			})
		})
	      .then(results => {
			return results.json();
		  }).then(data => {
			console.log(data.venues);
		    let places = data.venues.map((venue) => {
				console.log(data.venue);
			  return(
				  <PlaceItem name={venue.name} where={venue.location.address} link_url={"/place?place_id=" + venue.id} key={venue.id}/>
		    );
		  });

		  component.setState({places: places, name: query.name});
	  });
		  
	  }, (error) => {
        component.setState({ lat: 'err-latitude', lon: 'err-longitude' });
      })
    }
}

export function loadPlaceDetail(component) {
	const query = QueryString.parse(component.props.location.search);
	const place_id = query.place_id;

	fetch("/api/venues/search/" + place_id, {
		headers: new Headers({
			"x-access-token": localStorage.getItem('token'),
		})
	})
	  .then(results => {
		return results.json();
	  }).then(data => {
		console.log(data.venue);
		console.log(data.venue);
		component.setState({name: data.venue.name});
		component.setState({address: data.venue.location.address});

		var venue_data = {}

		venue_data["_id"] = (data.venue.id) ? data.venue.id : null;
		venue_data["phone"] = (data.venue.contact.phone) ? data.venue.contact.phone:null ;
		venue_data["page_url"] = (data.venue.url) ? data.venue.url: null ;
		venue_data["rating"] = (data.venue.rating) ? data.venue.rating : null ;
		venue_data["twitter"] = (data.venue.contact.twitter) ? data.venue.contact.twitter: null;
		venue_data["categories"] = (data.venue.categories) ? data.venue.categories: null ;
		venue_data["location"] = (data.venue.location) ? data.venue.location : null;
		component.setState({ venue_data: venue_data});
		  console.log(venue_data);
	  });

}

export function signIn(component) {
	const body = JSON.stringify({
			email: component.state.email,
			password: component.state.password,
		})

	console.log(localStorage.getItem('token'));
	console.log(localStorage.getItem('user_cell'));
	console.log(localStorage.getItem('user_name'));
	console.log(localStorage.getItem('user_id'));
	console.log(localStorage.getItem('user_email'));
	fetch("/api/users/signIn", {
		method: 'POST',
		headers: new Headers({
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}),
		 body:	body	})
	.then((response) => response.json())
	.then((responseJSON) => {
		if(responseJSON.success == true) {
			console.log(responseJSON);
			localStorage.setItem('token', responseJSON.token);
			localStorage.setItem("user_name", responseJSON.user.name);
			localStorage.setItem("user_cell", responseJSON.user.cell);
			localStorage.setItem("user_email", responseJSON.user.email);
			localStorage.setItem("user_id", responseJSON.user._id);
			component.props.history.push("/");
		} else {
			alert(responseJSON.message);
		}
	})
	.catch((error) => {
		console.error(error);
		alert("Error");
	});	
}

export function createInterest(component) {
	console.log(component.state.user_comment);
	const body = JSON.stringify({
			message: component.state.user_comment,
			person: localStorage.getItem('user_id'),
			venue: component.state.venue_data._id,
		})

	console.log(body);
	fetch("/api/interest", {
		method: 'POST',
		headers: new Headers({
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			"x-access-token": localStorage.getItem('token'),
		}),
		 body:	body	})
	.then((response) => response.json())
	.then((responseJSON) => {
		if(responseJSON.success == true) {
			console.log(responseJSON);
			// Add interest to interest list of component
		} else {
			console.log("Error")
		}
	})
	.catch((error) => {
		console.error(error);
	});	
}

