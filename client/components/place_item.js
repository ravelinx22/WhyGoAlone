import React from 'react'
import '../styles/styles.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

export const PlaceItem = (props) =>  {
	return(
		<Col md="4">
			<Link to={props.link_url}>
				<div className="place_item_container">	
					<img src="https://b.zmtcdn.com/data/pictures/7/18589977/8c0f5f641d2707f0ad96cbb1cc259625_top_thumb_620_314.jpg?output-format=webp" alt="algo" className="place_item_img"/>
					<div className="place_item_info">
						<div className="place_item_name">Nombre</div>
						<div className="place_item_location">Ubicacion</div>
					</div>
				</div>
			</Link>
		</Col>
	);
}
