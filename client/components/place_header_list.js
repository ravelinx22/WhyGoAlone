import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";

export const PlaceHeaderList = (props) =>  {
	return(
			<div className="place_header_list_container">
				<img src="../img/places.jpg" alt="places" className="place_header_list_img"/>
				<div className="place_header_list_info">
					<div className="place_header_list_name">{props.name}</div>
					<div className="place_header_list_description">{props.description}</div>
					<div clasName="place_header_list_length">{props.length}</div>
				</div>
			</div>
	);
}
