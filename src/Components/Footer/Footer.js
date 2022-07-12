import {  Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import './Footer.css'

const footer = () => (
<footer className="background-red white text-center">
	<h4>Blanchard Horton PLLC</h4>
	<h5>(865) 269-2673</h5>
	<ul className="nav justify-content-center">
		<li style={{padding: '0 1rem'}}><Link to="/">Home</Link></li>
		<li style={{padding: '0 1rem'}}><Link to="/about">About</Link></li>
		<li style={{padding: '0 1rem'}}><Link to="/services">Services</Link></li>
		<li style={{padding: '0 1rem'}}><Link to="/our-team">Our Team</Link></li>
		<li style={{padding: '0 1rem'}}><Link to="/contact">Contact</Link></li>
	</ul>
	<Row className="justify-content-center" style={{marginTop: '2rem'}}>
	<Col lg="3">
		<h5 style={{fontWeight: "bold", textDecoration: "underline"}}>P.O. Box</h5>
		<h6>P.O. Box 5657</h6>
		<h6>Oak Ridge, TN 37831</h6>
	</Col>
	<Col lg="3">
		<h5 style={{fontWeight: "bold", textDecoration: "underline"}}>Address</h5>
		<h6>40 New York Avenue Suite 300</h6>
		<h6>Oak Ridge, TN 37831</h6>
	</Col>
	</Row>
</footer>
);


export default footer
