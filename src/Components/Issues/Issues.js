import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'

import Pic from '../Pic/Pic'

import cards from '../../images/cards.jpg'
import circuits from '../../images/circuits.jpg'
import scales from '../../images/scales.jpg'
import tubes from '../../images/tubes.jpg'
import barometer from '../../images/barometer.jpg'
import book from '../../images/book.jpg'

import './Issues.css'

// let monDes = "This is America - the greatest country in the modern world. And yet we are the only country without access to affordable and comprehensive healthcare for its citizens."
// let fireworksDes = "Cannabis is a quickly growing industry and America is not capitalizing on it properly. Colorado made $1.7 billion in profit off the cannabis industry alone."
// let towerDes = "Unions are the backbone of fair wages and benefits in America. We need to support them by letting them exist fairly and giving them access to new resources."
// let greatDes = "Climate change is real. We need to accept that as a nation and use that information to benefit us. Taxing fossil fuel industries and creating jobs and wealth from alternative energy sources will help every American."
// let capitolDes = "Washington is as murky as ever since the 2016 election. We need a new era of transparency and accountability in D.C. and our current administration is not a part of that."

const aboutDesc = "Learn how our boutique intellectual property practice helps clients protect technology assets with purpose.";
const servicesDesc = "Patent, trademark, copyright, trade dress, and trade secret counsel for growing businesses.";
const ourTeamDesc = "Meet attorneys with technical depth, litigation experience, and USPTO practice credentials.";
const contactDesc = "Call our Oak Ridge office to discuss whether our IP counsel is the right fit for your matter.";

class Issues extends Component {


  componentDidMount() {
    let imageList = [cards, circuits, scales, tubes, barometer, book]
    imageList.forEach((image) => {
      new Image().src = image
    });
  }

render() {

return(
  <div id="more">
    <section className="section-shell home-pathways">
      <p className="section-kicker">How we can help</p>
      <div className="home-pathways-heading">
        <h2 className="section-title">Focused counsel for the full life of an intellectual property asset.</h2>
        <p className="section-lede">From early clearance and filing strategy through portfolio management, licensing, and enforcement, Blanchard Horton PLLC helps clients make practical decisions about valuable technology and brand rights.</p>
      </div>
    </section>
    <Row className="issuesWrapper justify-content-around">
      <Col lg="6" className="order-1 order-lg-1">
        <Pic
          title={"About"}
          description={aboutDesc}
          img={tubes}
          link={'/about'} />
      </Col>
      <Col lg="6" className="order-2 order-lg-2">
        <Pic
        title={"Services"}
        description={servicesDesc}
        img={barometer}
        link={'/services'} />
      </Col>
      <Col lg="6" className="order-4 order-lg-3">
        <Pic
        title={"Our Team"}
        description={ourTeamDesc}
        img={scales}
        link={'/our-team'} />
      </Col>
      <Col lg="6" className="order-3 order-lg-4">
      <Pic
      title={"Contact"}
      description={contactDesc}
      img={cards}
      link={'/contact'} />
      </Col>
    </Row>
  </div>
)
}
};

export default Issues
