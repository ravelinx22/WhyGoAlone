import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { SearchPlaceInput } from './search_place_input';

export const HomeHeader = (props) => {
	return(
		<Row>
			<Col md="12">
				<Row className="justify-content-center home_header_logo">
					Why Go Alone
				</Row>
				<SearchPlaceInput/>
				<Row className="justify-content-center">
					<Button outline color="secondary" className="btn_nearby">Nearby</Button>
				</Row>
			</Col>
		</Row>
	);
}
