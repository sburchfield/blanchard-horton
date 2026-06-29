import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

import './SideDrawer.css'

const sideDrawer = props => {

  let drawerClasses = ['sideDrawer'];

  if(props.show){
    drawerClasses = 'sideDrawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
      <li><Link onClick={props.click} to="/">Home</Link></li>
      <li><Link onClick={props.click} to="/about">About</Link></li>
      <li><Link onClick={props.click} to="/services">Services</Link></li>
      <li><Link onClick={props.click} to="/our-team">Our Team</Link></li>
      <li><Link onClick={props.click} to="/contact">Contact</Link></li>
      <li><a className="drawer-phone" href="tel:865-269-2673"><FaPhoneAlt /> (865) 269-2673</a></li>
      <li className="drawer-social">
        <a href="https://www.facebook.com/profile.php?id=61557327835382" target="_blank" rel="noopener noreferrer" aria-label="Facebook Account"><FaFacebook /></a>
        <a href="https://www.linkedin.com/company/79008216/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Account"><FaLinkedin /></a>
      </li>
      </ul>
    </nav>
  )
};

export default sideDrawer
