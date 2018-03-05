import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom"

export const PlaceItem = (props) =>  {
	return(
		<Col md="4">
			<Link to={props.link_url}>
				<div className="place_item_container">
					<img src="../img/place_item.jpg" alt="place_item" className="place_item_img"/>
					<div className="place_item_info">
						<div className="place_item_name">{props.name}</div>
						<div className="place_item_location">{props.where}</div>
					</div>
				</div>
			</Link>
		</Col>
	);
}
