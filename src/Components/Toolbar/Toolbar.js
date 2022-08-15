import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { Link } from 'react-router-dom';

import './Toolbar.css';

const toolbar = props => (
  <section className="toolbar background-white">
    <nav className="toolbar_nav" id="toolbar_nav">
    <div className="logo_wrapper">
        <Link to="/"><div className="logo"></div></Link>
    </div>
    <div className="spacer" />
    <div>
    <ul className="toolbar_nav_right">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/our-team">Our Team</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      {/* <li className="socialIcons"><a href="https://facebook.co" target="_blank" rel="noopener noreferrer" title="Facebook Account"><FaFacebook /></a></li> */}
      <li className="socialIcons"><a href="https://www.linkedin.com/company/79008216/" target="_blank" rel="noopener noreferrer" title="Linkedin Account"><FaLinkedin /></a></li>
      {/* <li className="socialIcons"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter Account"><FaTwitterSquare /></a></li> */}
    </ul>
    </div>
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
    </nav>
  </section>
);


export default toolbar