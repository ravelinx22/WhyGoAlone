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

		fetch(url)
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

	fetch("/api/venues/search/" + place_id)
	  .then(results => {
		return results.json();
	  }).then(data => {
		console.log(data.venue);
		console.log(data.venue);
		component.setState({name: data.venue.name});
		component.setState({address: data.venue.location.address});

		var venue_data = {}
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
