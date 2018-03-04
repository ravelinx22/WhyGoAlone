import React from 'react';
import '../styles/styles.css'
import {Button, Container, Col, Row} from 'reactstrap';


export default class SignIn  extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<div className="form_container">
					<Row>
						<Col md = "6">
							<h1>Sign In</h1>
							<br/>
							<div className="input_line">
								<input className = "input_join2" type="text" placeholder="Mail" />
							</div>
							<div className="input_line">
								<input className = "input_join2" type="text" placeholder="Password" />
							</div>
							<Button outline color="secondary">Sign In</Button>
						</Col>
						<Col md = "6" className = "sign_Image">
							<img src="https://b.zmtcdn.com/data/pictures/7/18589977/8c0f5f641d2707f0ad96cbb1cc259625_top_thumb_620_314.jpg?output-format=webp" alt="algo" className="place_item_img"/>			
						</Col>
					</Row>
				</div>
			</Container>

			);
	}
}

