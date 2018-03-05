import React from "react";
import "../styles/styles.css";
import { HomeHeader } from "../components/home_header";
import { Container, Row, Col } from "reactstrap";
import { CategoryItem } from "../components/category_item";
import { SectionTitle } from "../components/section_title";

export default class Home  extends React.Component {

  render() {
    return (
		<div>
			<Container fluid="true" className="home_header_img">
				<HomeHeader/>
			</Container>
			<Container>
				<SectionTitle name="Categories" description="Explore curated lists of top restaurants, cafes, pubs, and bars in and around you."/>
				<Row className="category_grid">
					<CategoryItem src="../img/entertainment.jpg" link_url="/places?category_id=4d4b7104d754a06370d81259&name=Entertainment" name="Entertainment" description="Aquarium, Videogame Room, Art Gallery, Bowling, Casino, among others."/>
					<CategoryItem src="../img/food.jpg" link_url="/places?category_id=4d4b7105d754a06374d81259&name=Food" name="Food" description="Coffee, Hamburgers, Cafeteria, Buffet, among others."/>
					<CategoryItem src="../img/nightlife.jpg" link_url="/places?category_id=4d4b7105d754a06376d81259&name=Nightlife" name="Nightlife" description="Bar, Brewery, Lounge, Night Market, among others."/>
					<CategoryItem src="../img/outlife.jpg" link_url="/places?category_id=4d4b7105d754a06377d81259&name=Fresh+Air" name="Fresh Air" description="Gyms, soccer fields, Beach, Camping, among others."/>
					<CategoryItem src="../img/store.jpg" link_url="/places?category_id=4d4b7105d754a06378d81259&name=Stores+and+Services" name="Stores and Services" description="ATM, Crafts store, Mechanical workshop, Banks, among others."/>
					<CategoryItem src="../img/travel.jpg" link_url="/places?category_id=4d4b7105d754a06379d81259&name=Travel" name="Travel" description="Airport, boat or ferry, cable car, among others."/>
				</Row>
			</Container>
		</div>
    );
  }
}
