import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBookmark from "@fortawesome/fontawesome-free-solid/faBookmark"

export const PlaceHeaderDetail = (props) =>  {
	return(
			<div className="place_header_detail_container">
				<img src={props.src} alt="place_header_detail" className="place_header_detail_img"/>
				<div className="place_header_list_info">
					<div className="place_header_detail_name">{props.name}</div>
					<div clasName="place_header_detail_location">{props.where}</div>
					<hr/>
					<a href="#leave_comment">
						<FontAwesomeIcon icon={faBookmark} /> I'm Interested
					</a>
				</div>
			</div>
	);
}
