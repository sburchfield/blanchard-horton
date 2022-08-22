import React, { Component } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

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
            <div className="row headerWrapper justify-content-center align-items-center">
              <div className="col-6">
                <div className="text-center">
                    <div className="header-logo"></div>
                    <h3>(865) 269-2673</h3>
                    <h4>P.O. Box 5657 Oak Ridge, TN 37831</h4>
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
          </div>
        </header>
      </div>
    )
  }

}


export default Header
