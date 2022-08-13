import React from 'react';

import './AniCard.css'


function AniCard(props) {


  return(
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card">
        <div className="background-grey services-background" style={{backgroundImage: `url( ${props.background})`}}>
            <div className="icon-section filter">
              {props.icon}
              <div className="card-body white">
                <h3 className="card-title"><b>{props.title}</b></h3>
                <p className="card-text">{props.text}</p>
              </div>
            </div>
        </div>
        <ul className="list-group list-group-flush">
          {
            props.li.map( (item, s) => {
              return(
                <li key={"li" + s} className="list-group-item" style={{fontSize: '0.8rem'}}><span>{item}</span></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default AniCard
