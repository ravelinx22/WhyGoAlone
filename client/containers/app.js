import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Button
} from 'reactstrap';
import '../styles/styles.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" className="fixed-top navbar-dark bg-dark">
          <NavbarBrand href="/">Why Go Alone</NavbarBrand>
		  <Button outline color="danger" className="ml-auto nav_btn">Sign In</Button>
		  <Button outline color="danger" className="nav_btn">Sign Up</Button>
        </Navbar>
		
		
		<footer className="bg-dark">
			<div class="footer_brand">Why Go Alone</div>
			<div class="footer_makers">William Ravelo M & Nicolas Aguilas</div>
			<div class="footer_license">MIT License</div>
		</footer>
  </div>
    );
  }
}
