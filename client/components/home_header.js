import React from "react"
import { Container, Row, Col, Button } from "reactstrap";
import SearchPlaceInput from "./search_place_input";
import { Link } from "react-router-dom";

export const HomeHeader = (props) => {
	return(
		<Row>
			<Col md="12">
				<Row className="justify-content-center home_header_logo">
					<img src="../img/logo.png" alt="log" class="home_header_logo"/>
				</Row>
				<SearchPlaceInput/>
				<Row className="justify-content-center">
					<Link to="/places?type=nearby&name=Nearby" className="btn_nearby btn btn-outline-secondary inner_btn">Nearby</Link>
		</Row>
			</Col>
		</Row>
	);
}
