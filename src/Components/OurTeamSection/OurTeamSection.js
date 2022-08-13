import React from 'react';


import './OurTeamSection.css';


const ourTeamSection = (props) => {

  return (
    <div className="col-12 col-lg-6">
    <div className="aboutSectionWrapper card">
      <h4 className="aboutSectionHeader">{props.firstName} {props.lastName}</h4>
      <div>
        <div className="aboutSectionImage" style={{backgroundImage: `url( ${props.image})`}}></div>
      </div>
      <div>
        <div>
                <div style={{padding: '1rem'}}>
                  <h5 className="text-center">Specialties</h5>
                  <div class="text-center">
                    <span className="specialties">Sit amet</span>
                    <span className="specialties">Ipsum a arcu</span>
                    <span className="specialties">Iaculis eu</span>
                  </div>
                </div>
                <div  className="card" style={{padding: '1rem', borderRadius: '0.6rem', boxShadow: 'inset 0 2px 10px #cecece'}}>
                <h5 className="text-center">About {props.firstName}</h5>
                <p>{props.about}</p>
                </div>
              </div>
      </div>
    </div>
    </div>
  );
}


export default ourTeamSection;
