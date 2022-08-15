import React, { Component } from 'react';


import './Slogan.css';


class Slogan extends Component {

  render(){
    return (
    <div style={{backgroundColor: '#f5f5ef', padding: '1rem 0'}}>
      <div className="sloganWrapper white text-center">
        <h2>Blanchard Horton PLLC</h2>
        <p>
          Collectively, our attorneys have over 40 years of experience preparing, obtaining, and evaluating foreign and domestic patents and trademark registrations, managing intellectual property portfolios, licensing and negotiating asset purchases of intellectual property rights, and litigating complex patent, trademark, unfair competition, and false advertising disputes.  Find out how we can help you unlock the full potential of your technology assets, to create new business opportunities, to protect existing markets, and to achieve value for your company or organization.
        </p>
      </div>
    </div>
    );
  }

}

export default Slogan;
