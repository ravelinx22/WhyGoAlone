import React from 'react'
import '../styles/styles.css';
import { Container, Row, Col, Button } from 'reactstrap';

export const SearchPlaceInput = (props) =>  {
	return(
		<Row className="justify-content-center">
			<input type="text" placeholder="I'm searching for..." className="search_input"/>
			<input type="text" placeholder="City" className="search_input"/>
			<Button outline color="secondary">Search</Button>
		</Row>
	);
}
