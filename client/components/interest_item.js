import React from 'react'
import '../styles/styles.css';
import { Container, Row, Col, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBookmark from '@fortawesome/fontawesome-free-solid/faPhoneSquare'
import { Link } from 'react-router-dom';

export const InterestItem = (props) =>  {
	return(
		<Row className="interest_item_container">
			<img src="https://igx.4sqi.net/img/user/32x32/RP0QUWZS3EMFWOTQ.jpg" alt="algo" className="interest_item_pic"/>
			<div className="interest_item_info">
				<div className="interest_item_info_name">Name</div>
				<div className="interest_item_info_comment">Me encanta!! Es indudablemente el mejor café de Bogota.... hoy probé un té de frutos secos servidos en prensa francesa... me encantó!!</div>
				<div className="btn_contact_interested">
					<Link to="/">
						<FontAwesomeIcon icon={faBookmark}/> Contact
					</Link>
				</div>
			</div>
		</Row>
	);
}
