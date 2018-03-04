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
				  <PlaceItem place_id={venue.id} name={venue.name} where={venue.location.address} link_url="/place" key={venue.id}/>
		    );
		  });

		  component.setState({places: places, name: query.name});
	  });
		  
	  }, (error) => {
        component.setState({ lat: 'err-latitude', lon: 'err-longitude' });
      })
    }
}
