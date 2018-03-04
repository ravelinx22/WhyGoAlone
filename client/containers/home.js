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
					<CategoryItem link_url="/places?category_id=4d4b7104d754a06370d81259&name=Entretenimiento" name="Entretenimiento" description="Anfiteatro, Acuario, Salón de Videojuegos,  Galería de arte, Bowling, Casino , entre otros."/>	
					<CategoryItem link_url="/places?category_id=4d4b7105d754a06374d81259&name=Comida" name="Comida" description="Café, Hamburguesería, Cafetería, Buffet, entre otros."/>	
					<CategoryItem link_url="/places?category_id=4d4b7105d754a06376d81259&name=Nocturno" name="Nocturno" description="Bar, Cervecera, Salón, Mercado nocturno, entre otros."/>	
					<CategoryItem link_url="/places?category_id=4d4b7105d754a06377d81259&name=Aire+Libre" name="Aire libre" description="Gimnasios, campos de fútbol, Playa, Camping, entre otros."/>	
					<CategoryItem link_url="/places?category_id=4d4b7105d754a06378d81259&name=Tiendas+y+Servicios" name="Tiendas y Servicios" description="Cajero automatico, Tienda de artesanias, Taller mecanico, Bancos, entre otros."/>	
					<CategoryItem link_url="/places?category_id=4d4b7105d754a06379d81259&name=Viajes+y+Transporte" name="Viajes y Transporte" description="Aeropuerto, Barco o ferry, Teleférico, entre otros."/>	
				</Row>
			</Container>
		</div>
    );
  }
}
