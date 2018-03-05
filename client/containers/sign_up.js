import React from "react";
import "../styles/styles.css"
import {Button, Container, Col, Row} from "reactstrap";
import { signUp } from "../actions/component_actions";


export default class SignUp  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			cell: "",
			password: ""
		}
		this.signUp = signUp.bind(this);
	}

	updateName(evt) {
		this.setState({
			name: evt.target.value
		});
	}

	updateEmail(evt) {
		this.setState({
			email: evt.target.value
		});
	}

	updateCell(evt) {
		this.setState({
			cell: evt.target.value
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
							<h1>Sign Up</h1>
							<br/>
							<div className="input_line">
								<input className = "input_join1" type="text" placeholder="Name" value={this.state.name} onChange={(evt) => this.updateName(evt)}/>
								<input className = "input_join2" type="email" placeholder="Email" value={this.state.email} onChange={(evt) => this.updateEmail(evt)}/>
							</div>
							<div className="input_line">
								<input className = "input_full" type="text" placeholder="Cell" value={this.state.cell} onChange={(evt) => this.updateCell(evt)}/>
							</div>
							<div className="input_line">
								<input className = "input_full" type="password" placeholder="Password" value={this.state.password} onChange={(evt) => this.updatePassword(evt)}/>
							</div>
							<Button  className = "input_full" outline color="secondary inner_btn" onClick={() => this.signUp(this)}>Sign Up</Button>
						</Col>
						<Col md = "6" className = "sign_Image">
						<img src="../img/sign_up.jpg" alt="sign_up" className="place_item_img"/>
						</Col>
					</Row>
				</div>
			</Container>

			);
	}
}
