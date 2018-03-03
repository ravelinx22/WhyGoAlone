import React from 'react';
import '../styles/styles.css';
import { PlaceItem } from '../components/place_item';
import { Container, Row, Col } from 'reactstrap';
import { PlaceHeaderList } from '../components/place_header_list.js';

export default class PlaceList  extends React.Component {
  render() {
    return (
      <div className="place_list">
		<Container>
			<PlaceHeaderList/>
		</Container>
		<Container>
			<Row>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
				<PlaceItem link_url="/place"/>
			</Row>
		</Container>
     </div>
    );
  }
}
