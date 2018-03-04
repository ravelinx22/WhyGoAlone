import React from 'react'
import '../styles/styles.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { PlaceDetailInfoItem } from './place_detail_info_item';

export const PlaceDetailInfo = (props) =>  {
	var i = 0;
	var components = [];
	if(props.venue_data.phone) {
		components.push(<PlaceDetailInfoItem name="Phone" data={props.venue_data.phone} key={i}/>);
		i++;
	}
	if(props.venue_data.page_url) {
		components.push(<PlaceDetailInfoItem name="Page URL" data={props.venue_data.page_url} key={i}/>);
		i++;
	}
	if(props.venue_data.rating) {
		components.push(<PlaceDetailInfoItem name="Rating" data={props.venue_data.rating} key={i}/>);
		i++;
	}
	if(props.venue_data.twitter) {
		components.push(<PlaceDetailInfoItem name="Twitter" data={"@" + props.venue_data.twitter} key={i}/>);
		i++;
	}
	if(props.venue_data.categories) {
		components.push(<PlaceDetailInfoItem name="Category" data={props.venue_data.categories[0].name} key={i}/>);
		i++;
	}
	if(props.venue_data.location && props.venue_data.location.formattedAddress) {
		components.push(<PlaceDetailInfoItem name="Address" data={props.venue_data.location.formattedAddress[0]} key={i}/>);
		i++;
	}



	return(
		<div className="place_detail_info_container">
			<Row>
				{components}
			</Row>
		</div>
	);
}
