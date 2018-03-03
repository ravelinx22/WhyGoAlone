import React from 'react';
import '../styles/styles.css';
import { HomeHeader } from '../components/home_header';
import { Container, Row, Col } from 'reactstrap';
import { CategoryItem } from '../components/category_item';
import { SectionTitle } from '../components/section_title';

export default class Home  extends React.Component {
  render() {
    return (
		<div>
			<Container fluid="true" className="home_header_img">
				<HomeHeader/>
			</Container>
			<Container>
				<SectionTitle name="Categorias" description="Explora listas de los mejores restaurantes, cafeterías, pubs y bares en alrededor de ti."/>
				<Row className="category_grid">
					<CategoryItem name="Buenas" description="desc desc desc desc desc desc desc desc"/>	
					<CategoryItem name="Buenas" description="desc desc desc desc desc desc desc desc"/>	
					<CategoryItem name="Buenas" description="desc desc desc desc desc desc desc desc"/>	
					<CategoryItem name="Buenas" description="desc desc desc desc desc desc desc desc"/>	
					<CategoryItem name="Buenas" description="desc desc desc desc desc desc desc desc"/>	
					<CategoryItem name="Buenas" description="desc desc desc desc desc desc desc desc"/>	
				</Row>
			</Container>
		</div>
    );
  }
}
