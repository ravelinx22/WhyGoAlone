import React from 'react';
import '../styles/styles.css';
import { PlaceHeaderDetail } from '../components/place_header_detail';
import { Container, Row, Col, Button } from 'reactstrap';
import { PlaceDetailInfo } from '../components/place_detail_info';
import { LeaveComment } from '../components/leave_comment';
import { InterestItem } from '../components/interest_item';

export default class PlaceDetail  extends React.Component {
  render() {
    return (
		<div className="place_detail">
			<Container>
				<PlaceHeaderDetail/>
			</Container>
			<Container>
				<PlaceDetailInfo/>
			</Container>
			<Container>
				<LeaveComment/>
			</Container>
			<Container>
				<Col md="12" className="interest_item_list">
					<InterestItem/>	
					<InterestItem/>	
					<InterestItem/>	
					<InterestItem/>	
					<InterestItem/>	
					<InterestItem/>	
					<InterestItem/>	
					<InterestItem/>	
					<InterestItem/>	
					<InterestItem/>	
				</Col>
			</Container>
		</div>
    );
  }
}
