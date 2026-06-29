import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import './Footer.css'

const currentYear = new Date().getFullYear();

const footer = () => (
	<footer className="site-footer">
		<div className="footer-shell">
			<div className="footer-brand">
				<h2>Blanchard Horton PLLC</h2>
				<p>Intellectual property counsel for inventions, brands, trade secrets, copyrights, and technology assets.</p>
				<div className="footer-actions">
					<a className="footer-call" href="tel:865-269-2673"><FaPhoneAlt /> (865) 269-2673</a>
					<a className="footer-directions" href="https://www.google.com/maps/search/?api=1&query=40%20New%20York%20Avenue%20Suite%20300%20Oak%20Ridge%20TN%2037830" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /> Directions</a>
				</div>
			</div>
			<nav className="footer-column" aria-label="Footer navigation">
				<h3>Explore</h3>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/services">Services</Link></li>
					<li><Link to="/our-team">Our Team</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>
			<div className="footer-column">
				<h3>Office</h3>
				<p>40 New York Avenue Suite 300<br />Oak Ridge, TN 37830</p>
				<h3>Mailing Address</h3>
				<p>P.O. Box 5657<br />Oak Ridge, TN 37831</p>
			</div>
			<div className="footer-column">
				<h3>Practice Focus</h3>
				<ul>
					<li>Patents</li>
					<li>Trademarks</li>
					<li>Copyrights</li>
					<li>Trade Secrets</li>
					<li>IP Licensing</li>
				</ul>
				<div className="footer-social" aria-label="Social links">
					<a href="https://www.facebook.com/profile.php?id=61557327835382" target="_blank" rel="noopener noreferrer" aria-label="Facebook Account"><FaFacebook /></a>
					<a href="https://www.linkedin.com/company/79008216/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Account"><FaLinkedin /></a>
				</div>
			</div>
		</div>
		<div className="footer-bottom">
			<p>&copy; {currentYear} Blanchard Horton PLLC. All rights reserved.</p>
			<p>This website is for general information only and does not create an attorney-client relationship.</p>
		</div>
	</footer>
);


export default footer
