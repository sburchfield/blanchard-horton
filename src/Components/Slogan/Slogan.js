import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Slogan.css';


class Slogan extends Component {

  render(){
    return (
    <div className="slogan-band">
      <div className="sloganWrapper">
        <div className="slogan-intro">
          <p className="section-kicker">Value in protection</p>
          <h2>IP guidance grounded in technical understanding and business context.</h2>
          <p>
            The firm helps clients acquire intellectual property rights with a purpose: protecting markets, creating opportunities, and supporting the value of a company or organization.
          </p>
          <Link className="slogan-link" to="/about">Learn about the firm</Link>
        </div>
        <div className="slogan-points" aria-label="Firm strengths">
          <div>
            <strong>Patent strategy</strong>
            <span>Preparation, prosecution, appeals, reissues, reexaminations, and validity analysis.</span>
          </div>
          <div>
            <strong>Brand protection</strong>
            <span>Trademark searches, applications, portfolio maintenance, opposition work, and enforcement.</span>
          </div>
          <div>
            <strong>Technology assets</strong>
            <span>Licensing, assignments, clearance opinions, trade secrets, and litigation support.</span>
          </div>
        </div>
      </div>
    </div>
    );
  }

}

export default Slogan;
