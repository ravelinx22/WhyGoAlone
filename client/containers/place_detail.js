import React from 'react';
import '../styles/styles.css';
import { PlaceHeaderDetail } from '../components/place_header_detail';
import { Container, Row, Col, Button } from 'reactstrap';
import { PlaceDetailInfo } from '../components/place_detail_info';
import { LeaveComment } from '../components/leave_comment';
import { InterestItem } from '../components/interest_item';
import { loadPlaceDetail, createInterest } from '../actions/component_actions';

export default class PlaceDetail  extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			name: "",
			address: "",
			venue_data: {},
			user_comment: ""
		}
		this.loadPlaceDetail = loadPlaceDetail.bind(this);
		this.createInterest = createInterest.bind(this);
	}
  
  updateComment(evt) {
	this.setState({
		user_comment: evt.target.value
	});
  }

  componentDidMount() {  
	const { history } = this.props;

	if (!localStorage.getItem('token')) {
		history.push('/signIn');
	} else {
		this.loadPlaceDetail(this);
		this.createInterest(this);
	}
  }

	
  render() {
	var i = 0;
	var components = []
	if(this.state.algo) {
		components.push(<div key={i}>{this.state.name}</div>);
		i++;
	}

    return (
		<div className="place_detail">
			{components}
			<Container>
				<PlaceHeaderDetail name={this.state.name} where={this.state.address}/>
			</Container>
			<Container>
				<PlaceDetailInfo venue_data={this.state.venue_data}/>
			</Container>
			<Container>
				<LeaveComment inputListener={(evt) => this.updateComment(evt)} leaveComment={() => this.createInterest(this)}/>
			</Container>
			<Container>
				<Col md="12" className="interest_item_list">
					<InterestItem name="Nombre" message="Mi comentario" profile_pic="https://igx.4sqi.net/img/user/32x32/RP0QUWZS3EMFWOTQ.jpg" contact_url="/"/>	
				</Col>
			</Container>
		</div>
    );
  }
}
