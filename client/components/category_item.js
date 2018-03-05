import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom"

export const CategoryItem = (props) =>  {
	return(
		<Col md="4">
			<Link to={props.link_url}>
			<Row className="category_item_container">
				<img src="https://b.zmtcdn.com/data/collections/fd9f357a3c50bfe439e3cdb5ba1d61f1_1463649151.jpg?fit=around%7C300%3A250&crop=300%3A250%3B%2A%2C%2A" alt="algo" className="category_item_img"/>
			<div className="category_item_info">
				<div className="category_item_name">{props.name}</div>
				<div className="category_item_description">{props.description}</div>
			</div>
			</Row>
			</Link>
		</Col>
	);
}
