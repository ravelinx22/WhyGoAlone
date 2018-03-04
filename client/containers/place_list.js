import React from 'react';
import '../styles/styles.css';
import { PlaceItem } from '../components/place_item';
import { Container, Row, Col } from 'reactstrap';
import { PlaceHeaderList } from '../components/place_header_list.js';
import QueryString from 'query-string';

export default class PlaceList  extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		name: "",
		places: [],
	}
  }

  componentDidMount() {
	  console.log(this.props);
	  const query = QueryString.parse(this.props.location.search);
	  console.log(query.category_id);
	  fetch("/api/venues/category/" + query.category_id + " ?ll=40.7243,-74.0010")
	  .then(results => {
		return results.json();
	  }).then(data => {
		let places = data.venues.map((venue) => {
			console.log(venue);
			return(
				<PlaceItem place_id={venue.id} name={venue.name} where={venue.location.address} link_url="/place" key={venue.id}/>
			);
		});

		this.setState({places: places, name: query.name});
	  });
  }

  render() {
    return (
      <div className="place_list">
		<Container>
			<PlaceHeaderList name={this.state.name} description="This were the results we found for you" length={this.state.places.length + " results"}/>
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
