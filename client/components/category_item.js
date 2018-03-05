import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom"

export const CategoryItem = (props) =>  {
	return(
		<Col md="4">
			<Link to={props.link_url}>
			<Row className="category_item_container">
				<img src={props.src} alt="algo" className="category_item_img"/>
			<div className="category_item_info">
				<div className="category_item_name">{props.name}</div>
				<div className="category_item_description">{props.description}</div>
			</div>
			</Row>
			</Link>
		</Col>
	);
}
