import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBookmark from "@fortawesome/fontawesome-free-solid/faPhoneSquare"
import { Link } from "react-router-dom";

export const InterestItem = (props) =>  {
	if(props.hide_contact) {
	return(
		<Row className="interest_item_container">
			<img src={props.profile_pic} alt="algo" className="interest_item_pic"/>
			<div className="interest_item_info">
				<div className="interest_item_info_name">{props.name}</div>
				<div className="interest_item_info_comment">{props.message}</div>
			</div>
		</Row>
	);
	} else {
	return(
		<Row className="interest_item_container">
			<img src={props.profile_pic} alt="algo" className="interest_item_pic"/>
			<div className="interest_item_info">
				<div className="interest_item_info_name">{props.name}</div>
				<div className="interest_item_info_comment">{props.message}</div>
				<div className="btn_contact_interested">
					<a href={props.contact_url} target="_blank">
						<FontAwesomeIcon icon={faBookmark}/> Contact
					</a>
				</div>
			</div>
		</Row>
	);
	}
}
