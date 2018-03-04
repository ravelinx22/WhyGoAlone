import React from 'react';
import '../styles/styles.css';
import { PlaceItem } from '../components/place_item';
import { Container, Row, Col } from 'reactstrap';
import { PlaceHeaderList } from '../components/place_header_list.js';

export default class PlaceList  extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		places: [],
	}
  }

  componentDidMount() {
	  fetch("http://localhost:8000/api/venues/category/4d4b7104d754a06370d81259?ll=40.7243,-74.0010")
	  .then(results => {
		return results.json();
	  }).then(data => {
		let places = data.venues.map((venue) => {
			console.log(venue);
			return(
				<PlaceItem place_id={venue.id} name={venue.name} where={venue.location.address} link_url="/place" key={venue.id}/>
			);
		});

		this.setState({places: places});
	  });
  }

  render() {
    return (
      <div className="place_list">
		<Container>
			<PlaceHeaderList name="Algo3" description="Algo2" length="Algo1"/>
		</Container>
		<Container>
			<Row>
				{this.state.places}
			</Row>
		</Container>
     </div>
    );
  }
}
