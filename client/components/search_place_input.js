import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class SearchPlaceInput extends React.Component  {
    constructor(props) {
		super(props);
		this.state = {
			query: "Hamburgers",
			near: "Bogota",
		}
	 }

	updateQuery(evt) {
		this.setState({
			query: evt.target.value
		});
	}

	updateNear(evt) {
		this.setState({
			near: evt.target.value
		});
	}

	render() {
	return(
		<Row className="justify-content-center">
			<input type="text" value={this.state.query} onChange={(evt) => this.updateQuery(evt)} placeholder="I'm searching for..." className="search_input"/>
			<input type="text" value={this.state.near} onChange={(evt) => this.updateNear(evt)} placeholder="City" className="search_input"/>
			<Link to={"/places?type=search&name=Search&query=" + this.state.query + "&near=" + this.state.near} className="btn_search btn btn-outline-secondary">Search</Link>
		</Row>
	);
}
}
