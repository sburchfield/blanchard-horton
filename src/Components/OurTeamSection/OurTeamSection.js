import React from 'react';
import {Row} from 'reactstrap'


import './OurTeamSection.css';


const ourTeamSection = (props) => {

  let left;
  let right;
  let left_order;
  let right_order;

  if(props.left){
    left = <div className="aboutSectionImage" style={{backgroundImage: `url( ${props.image})`}}></div>
    right = <div>
              <div  className="card" style={{ backgroundColor: 'rgb(244, 247, 245)', padding: '1rem', borderRadius: '0.6rem'}}>
                <h5 className="text-center">Specialties</h5>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-3 specialties">Sit amet</div>
                  <div className="col-12 col-lg-3 specialties">Ipsum a arcu</div>
                  <div className="col-12 col-lg-3 specialties">Iaculis eu</div>
                </div>
              </div>
              <div  className="card" style={{backgroundColor: 'rgb(244, 247, 245)', padding: '1rem', borderRadius: '0.6rem'}}>
              <h5 className="text-center">About Jay</h5>
              <p>{props.about}</p>
              </div>
            </div>
    left_order = "col-12 col-md-5 aboutSectionText order-2 order-md-1";
    right_order = "col-12 col-md-5 aboutSectionText order-2 order-md-1";
  }else{
    right = <div className="aboutSectionImage" style={{backgroundImage: `url( ${props.image})`}}></div>
    left = <div>
              <div  className="card" style={{backgroundColor: 'rgb(244, 247, 245)', padding: '1rem', borderRadius: '0.6rem'}}>
                <h5 className="text-center">Specialties</h5>
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-3 specialties">Sit amet</div>
                  <div className="col-12 col-lg-3 specialties">Ipsum a arcu</div>
                  <div className="col-12 col-lg-3 specialties">Iaculis eu</div>
                </div>
              </div>
              <div  className="card" style={{backgroundColor: 'rgb(244, 247, 245)', padding: '1rem', borderRadius: '0.6rem'}}>
              <h5 className="text-center">About Jake</h5>
              <p>{props.about}</p>
              </div>
            </div>
    left_order = "col-12 col-md-5 aboutSectionText order-2 order-md-1";
    right_order = "col-12 col-md-5 aboutSectionText order-1 order-md-2";
  }
  return (
    <div className="aboutSectionWrapper">
    <h4 className="aboutSectionHeader">{props.header}</h4>
    <Row className="justify-content-center align-items-center">
    <div className={left_order}>
      {left}
    </div>
    <div className={right_order}>
      {right}
    </div>
    </Row>
    </div>
  );
}


export default ourTeamSection;
