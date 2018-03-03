import React from 'react';
import '../styles/styles.css';
import { PlaceHeaderDetail } from '../components/place_header_detail';
import { Container, Row, Col, Button } from 'reactstrap';

export default class PlaceDetail  extends React.Component {
  render() {
    return (
		<div className="place_detail">
			<Container>
				<PlaceHeaderDetail/>
			</Container>
		</div>
    );
  }
}
