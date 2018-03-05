import React from "react";
import "../styles/styles.css"
import {Button, Container, Col, Row} from "reactstrap";
import { signIn } from "../actions/component_actions";

export default class SignIn  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		}
		this.signIn = signIn.bind(this);
	}

	updateEmail(evt) {
		this.setState({
			email: evt.target.value
		});
	}

	updatePassword(evt) {
		this.setState({
			password: evt.target.value
		});
	}


  componentDidMount() {
	const { history } = this.props;

	if (localStorage.getItem("token")) {
		history.push("/");
	}
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
								<input className = "input_join2" type="email" placeholder="Email" value={this.state.email} onChange={(evt) => this.updateEmail(evt)} />
							</div>
							<div className="input_line">
								<input className = "input_join2" type="password" placeholder="Password" value={this.state.password} onChange={(evt) => this.updatePassword(evt)} />
							</div>
							<Button outline color="secondary inner_btn" onClick={() => this.signIn(this)}>Sign In</Button>
						</Col>
						<Col md = "6" className = "sign_Image">
							<img src="../img/sign_in.jpg" alt="sign_in" className="place_item_img"/>
						</Col>
					</Row>
				</div>
			</Container>

			);
	}
}
