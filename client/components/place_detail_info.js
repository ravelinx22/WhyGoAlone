import React from 'react'
import '../styles/styles.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { PlaceDetailInfoItem } from './place_detail_info_item';

export const PlaceDetailInfo = (props) =>  {
	return(
		<div className="place_detail_info_container">
			<Row>
				<PlaceDetailInfoItem name="Name" data="Data" />
				<PlaceDetailInfoItem name="Name" data="Data" />
				<PlaceDetailInfoItem name="Name" data="Data" />
				<PlaceDetailInfoItem name="Name" data="Data" />
				<PlaceDetailInfoItem name="Name" data="Data" />
				<PlaceDetailInfoItem name="Name" data="Data" />
				<PlaceDetailInfoItem name="Name" data="Data" />
			</Row>
		</div>
	);
}
