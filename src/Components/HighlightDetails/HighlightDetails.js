import React, { Component } from 'react';
import { Row, Col, Collapse, CardBody, Card, CardHeader } from 'reactstrap';

import monument from '../../images/monument.jpg'
import fireworks from '../../images/fireworks.jpg'
import tower from '../../images/tower.jpg'
import greatSmokeyMountains from '../../images/great-smokey-mountains.jpg'
import usCapitolBuilding from '../../images/us-capitol-building.jpg'

import './HighlightDetails.css';

let policy = [{
                title: "Lorem_Ipsum",
                text: " Augue interdum velit euismod in pellentesque massa. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor.",
                list: ["Lorem mollis aliquam ut porttitor leo", "Posuere ac ut consequat semper viverra nam libero", "Metus dictum at tempor commodo ullamcorper a", "At volutpat diam ut venenatis tellus in"]
              },
              {
                title: "Elit_Pellentesque",
                text: "Tristique et egestas quis ipsum suspendisse. In egestas erat imperdiet sed euismod nisi. Pellentesque eu tincidunt tortor aliquam nulla. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue.",
                list: ["Lorem mollis aliquam ut porttitor leo", "Posuere ac ut consequat semper viverra nam libero", "Metus dictum at tempor commodo ullamcorper a", "At volutpat diam ut venenatis tellus in"]
              },
              {
                title: "Morbi_Enim",
                text: "Non diam phasellus vestibulum lorem sed risus ultricies tristique. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet.",
                list: ["Lorem mollis aliquam ut porttitor leo", "Posuere ac ut consequat semper viverra nam libero", "Metus dictum at tempor commodo ullamcorper a", "At volutpat diam ut venenatis tellus in"]
              },
              {
                title: "Ornare",
                text: "Velit laoreet id donec ultrices tincidunt. Rhoncus aenean vel elit scelerisque. Odio morbi quis commodo odio aenean sed adipiscing diam.",
                list: ["Lorem mollis aliquam ut porttitor leo", "Posuere ac ut consequat semper viverra nam libero", "Metus dictum at tempor commodo ullamcorper a", "At volutpat diam ut venenatis tellus in"]
              },
              {
                title: "Senectus",
                text: "Arcu ac tortor dignissim convallis aenean et tortor at risus. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet.",
                list: ["Lorem mollis aliquam ut porttitor leo", "Posuere ac ut consequat semper viverra nam libero", "Metus dictum at tempor commodo ullamcorper a", "At volutpat diam ut venenatis tellus in"]
              }
              ]



let imageList = [monument, fireworks, tower, greatSmokeyMountains, usCapitolBuilding];

class ServicesDetails extends Component {


  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: "Lorem_Ipsum", cards: ["Lorem_Ipsum", "Elit_Pellentesque", "Morbi_Enim", "Ornare", "Senectus"] };
    console.log(window.location.hash);
  }

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === event ? 0 : event });
  }

  render() {
    const {cards, collapse} = this.state;
    return (
      <div className="container policyHeaderWrapper">
          {cards.map((id, i) => {
            return (
              <div key={i} id={policy[i].title}>
              <Card>
                <CardHeader className={(i%2 ? 'background-grey':'background-red') + ' white policyCardHeader'} onClick={this.toggle} data-event={policy[i].title}>{policy[i].title.replace(/_/g, " ")}</CardHeader>
                <Collapse isOpen={collapse === id}>
                  <CardBody>
                    <p className="policyText">{policy[i].text}</p>
                    <Row className="align-items-center justify-content-around listWrapper">
                      <Col lg="6">
                          <div className="policyImages" style={{backgroundImage: `url(${imageList[i]})`}}></div>
                      </Col>
                      <Col lg="6">
                        <ul>
                         {
                           policy[i].list.map( (item, s) => {
                             return(
                               <li key={"li" + s}>{item}</li>
                             )
                           })
                         }
                       </ul>
                      </Col>
                    </Row>

                  </CardBody>
                </Collapse>
              </Card>
              </div>
            )
          })}

        </div>
    );
  }
}

export default ServicesDetails;
