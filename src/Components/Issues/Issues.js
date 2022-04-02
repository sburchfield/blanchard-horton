import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'

import Pic from '../Pic/Pic'

import monument from '../../images/1.jpg'
import fireworks from '../../images/2.jpg'
import tower from '../../images/3.jpg'
import greatSmokeyMountains from '../../images/4.jpg'
import usCapitolBuilding from '../../images/5.jpg'

import './Issues.css'

// let monDes = "This is America - the greatest country in the modern world. And yet we are the only country without access to affordable and comprehensive healthcare for its citizens."
// let fireworksDes = "Cannabis is a quickly growing industry and America is not capitalizing on it properly. Colorado made $1.7 billion in profit off the cannabis industry alone."
// let towerDes = "Unions are the backbone of fair wages and benefits in America. We need to support them by letting them exist fairly and giving them access to new resources."
// let greatDes = "Climate change is real. We need to accept that as a nation and use that information to benefit us. Taxing fossil fuel industries and creating jobs and wealth from alternative energy sources will help every American."
// let capitolDes = "Washington is as murky as ever since the 2016 election. We need a new era of transparency and accountability in D.C. and our current administration is not a part of that."

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

class Issues extends Component {


  componentDidMount() {
    let imageList = [monument, fireworks, tower, greatSmokeyMountains, usCapitolBuilding]
    imageList.forEach((image) => {
      new Image().src = image
    });
  }

render() {

return(
  <div id="more">
    <Row className="issuesWrapper justify-content-around">
      <Col lg="4">
        <Pic
          title={"About"}
          description={desc}
          bgColorValue={'#C41230'}
          img={monument}
          link={'/about'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"Services"}
        description={desc}
        bgColorValue={'#9FA1A4'}
        img={fireworks}
        link={'/services'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"Our Team"}
        description={desc}
        bgColorValue={'#C41230'}
        img={tower}
        link={'/our-team'} />
      </Col>
    </Row>
    <Row className="projectsWrapper justify-content-center">
      <Col lg="4">
      <Pic
      title={"Contact"}
      description={desc}
      bgColorValue={'#9FA1A4'}
      img={greatSmokeyMountains}
      link={'/contact'} />
      </Col>
      <Col lg="4">
        <Pic
        title={"Highlights"}
        description={desc}
        bgColorValue={'#C41230'}
        img={usCapitolBuilding}
        link={'/highlights'} />
      </Col>
    </Row>
  </div>
)
}
};

export default Issues
