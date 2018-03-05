import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBookmark from "@fortawesome/fontawesome-free-solid/faBookmark"

export const PlaceHeaderDetail = (props) =>  {
	return(
			<div className="place_header_detail_container">
				<img src="https://b.zmtcdn.com/data/pictures/chains/6/18368016/24ad94301c962c67b0655dd46426d465.jpg?resize=1203%3A802&crop=1200%3A464%3B0%2C98" alt="algo" className="place_header_detail_img"/>
				<div className="place_header_list_info">
					<div className="place_header_detail_name">{props.name}</div>
					<div clasName="place_header_detail_location">{props.where}</div>
					<hr/>
					<a href="#leave_comment">
						<FontAwesomeIcon icon={faBookmark} /> I"m Interested
					</a>
				</div>
			</div>
	);
}
