import {  Link } from 'react-router-dom';

import './Footer.css'

const footer = () => (
<footer className="background-red white text-center">
	<h4>Blanchard Horton PLLC</h4>
	<h5>(865) 269-2673</h5>
	<section>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/services">Services</Link>
		<Link to="/our-team">Our Team</Link>
		<Link to="/contact">Contact</Link>
		<Link to="/highlights">Highlights</Link>
	</section>
	<h6>4321 Law Ave</h6>
	<h6>Oak Ridge, Tn</h6>
	<h6>Elementum tempus egestas sed sed risus pretium quam vulputate dignissim.</h6>
</footer>
);


export default footer
