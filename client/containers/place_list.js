import React from "react";
import "../styles/styles.css";
import { PlaceItem } from "../components/place_item";
import { Container, Row, Col } from "reactstrap";
import { PlaceHeaderList } from "../components/place_header_list.js";
import { getMyLocation } from "../actions/component_actions";

export default class PlaceList  extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		name: "Search",
		places: [],
		lat: "40.7243",
		lon: "-74.0010",
	}
	this.getMyLocation = getMyLocation.bind(this);
  }

  componentDidMount() {
	const { history } = this.props;

	if (!localStorage.getItem("token")) {
		history.push("/signIn");
	} else {
	  this.getMyLocation(this);
	}
  }

  render() {
    return (
      <div className="place_list">
		<Container>
			<PlaceHeaderList name={this.state.name} description="This were the results we found for you" length={this.state.places.length + " results"}/>
		</Container>
		<Container>
			<Row>
				{this.state.places}
			</Row>
		</Container>
     </div>
    );
  }
}
