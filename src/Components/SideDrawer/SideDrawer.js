import React from 'react';
import { Link } from 'react-router-dom';

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
      <li><Link onClick={props.click} to="/highlights">Highlights</Link></li>
      </ul>
    </nav>
  )
};

export default sideDrawer
