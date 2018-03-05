import React from "react"
import "../styles/styles.css";
import { Container, Row, Col, Button } from "reactstrap";

export const LeaveComment = (props) =>  {
	return(
		<div className="leave_comment_container">
			<div className="leave_comment_title">Write a comment.</div>
			<input type="text" onChange={(evt) => props.inputListener(evt)} className="leave_comment_input" placeholder="What are you planning on doing?"/>
			<Button onClick={() => props.leaveComment()} color="success" className="btnInterested">I'm interested</Button>
		</div>
	);
}
