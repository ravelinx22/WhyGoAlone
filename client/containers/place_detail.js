import React from 'react';
import '../styles/styles.css';
import { PlaceHeaderDetail } from '../components/place_header_detail';
import { Container, Row, Col, Button } from 'reactstrap';
import { PlaceDetailInfo } from '../components/place_detail_info';
import { LeaveComment } from '../components/leave_comment';
import { InterestItem } from '../components/interest_item';

export default class PlaceDetail  extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
		name: "",
		address: "",
	}
  }

  componentDidMount() {
	  fetch("/api/venues/search/4b61ea3ff964a520002b2ae3")
	  .then(results => {
		return results.json();
	  }).then(data => {
		console.log(data.venue);
		console.log(data.venue);
		this.setState({name: data.venue.name});
		this.setState({address: data.venue.location.address});
	  });
  }

	
  render() {
    return (
		<div className="place_detail">
			<Container>
				<PlaceHeaderDetail name={this.state.name} where={this.state.address}/>
			</Container>
			<Container>
				<PlaceDetailInfo/>
			</Container>
			<Container>
				<LeaveComment/>
			</Container>
			<Container>
				<Col md="12" className="interest_item_list">
					<InterestItem name="Nombre" message="Mi comentario" profile_pic="https://igx.4sqi.net/img/user/32x32/RP0QUWZS3EMFWOTQ.jpg" contact_url="/"/>	
				</Col>
			</Container>
		</div>
    );
  }
}
