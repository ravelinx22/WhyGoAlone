import React from "react"
import { Container, Row, Col, Button } from "reactstrap";
import { SearchPlaceInput } from "./search_place_input";

export const SectionTitle  = (props) => {
	return(
		<div className="section_title">
			<Row className="section_title_name">{props.name}</Row>
			<Row className="section_title_description">{props.description}</Row>
		</div>
	);
}
