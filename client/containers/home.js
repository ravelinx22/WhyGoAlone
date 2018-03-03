import React from 'react';
import '../styles/styles.css';
import { HomeHeader } from '../components/home_header';
import { Container, Row, Col } from 'reactstrap';

export default class Home  extends React.Component {
  render() {
    return (
		<Container fluid="true" className="home_header_img">
			<HomeHeader/>
		</Container>
    );
  }
}
