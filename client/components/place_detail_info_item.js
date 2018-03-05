import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";

export const PlaceDetailInfoItem = (props) =>  {
	return(
			<Col md="4" className="column_place_detail_info">
				<div className="place_detail_info_item_name">{props.name}</div>
				<div className="place_detail_info_item_data">{props.data}</div>
			</Col>
	);
}
