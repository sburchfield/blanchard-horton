import React, { Component } from 'react';
import { FaChevronCircleDown, FaPhoneAlt } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import './Header.css'

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
}

class Header extends Component {

  render(){
    return(
      <div>
        <header>
          <div className="filter">
            <div className="headerWrapper">
              <div className="hero-copy">
                    <div className="header-logo"></div>
                    <p className="hero-kicker">Oak Ridge intellectual property attorneys</p>
                    <h1>Strategic protection for inventions, brands, and technology assets.</h1>
                    <p className="hero-lede">Blanchard Horton PLLC helps inventors, startups, and established companies secure, manage, and enforce intellectual property rights with business goals in view.</p>
                    <div className="button-row hero-actions">
                      <a className="button-primary" href="tel:865-269-2673"><FaPhoneAlt /> (865) 269-2673</a>
                      <Link className="button-secondary" to="/services">Explore Services</Link>
                    </div>
                    <dl className="hero-proof">
                      <div>
                        <dt>40+</dt>
                        <dd>years combined IP experience</dd>
                      </div>
                      <div>
                        <dt>USPTO</dt>
                        <dd>patent and trademark counsel</dd>
                      </div>
                      <div>
                        <dt>TN</dt>
                        <dd>serving clients nationwide</dd>
                      </div>
                    </dl>
                    <div className="scroll-link icon">
                    <HashLink 
                      smooth="true" 
                      to="#more"
                      scroll={el => scrollWithOffset(el, 85)}
                      ><FaChevronCircleDown /></HashLink>
                    </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }

}


export default Header
