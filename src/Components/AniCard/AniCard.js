import React from 'react';

import './AniCard.css'


function AniCard(props) {


  return(
    <div className="col-lg">
      <div className="card">
        <div className="background-grey" style={{backgroundImage: `url( ${props.background})`}}>
            <div className="icon-section filter">
            {props.icon}
            </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <ul className="list-group list-group-flush">
          {
            props.li.map( (item, s) => {
              return(
                <li key={"li" + s} className="list-group-item"><span>{item}</span></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default AniCard
