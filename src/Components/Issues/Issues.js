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

const aboutDesc = "Blanchard Horton PLLC provides expertise in all areas of intellectual property practice, including patents, trademarks, copyrights, trade dress, and trade secrets.";
const servicesDesc = "Patents, Trademarks, Copyrights, Trade Dress, and Trade Secrets.";
const ourTeanDesc = "Meet our team of dedicated attorneys.";
const contactDesc = "Find out how to get in touch with us.";

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
    <Row className="issuesWrapper justify-content-around">
      <Col lg="6" className="order-1 order-lg-1">
        <Pic
          title={"About"}
          description={aboutDesc}
          bgColorValue={'#C41230'}
          img={tubes}
          link={'/about'} />
      </Col>
      <Col lg="6" className="order-2 order-lg-2">
        <Pic
        title={"Services"}
        description={servicesDesc}
        bgColorValue={'#9FA1A4'}
        img={barometer}
        link={'/services'} />
      </Col>
      <Col lg="6" className="order-4 order-lg-3">
        <Pic
        title={"Our Team"}
        description={ourTeanDesc}
        bgColorValue={'#9FA1A4'}
        img={scales}
        link={'/our-team'} />
      </Col>
      <Col lg="6" className="order-3 order-lg-4">
      <Pic
      title={"Contact"}
      description={contactDesc}
      bgColorValue={'#C41230'}
      img={cards}
      link={'/contact'} />
      </Col>
    </Row>
  </div>
)
}
};

export default Issues
