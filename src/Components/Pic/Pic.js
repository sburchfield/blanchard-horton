import React from 'react';
import { Link } from 'react-router-dom'

import './Pic.css'

function Pic (props){
  const cardStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(18, 26, 39, 0.16), rgba(18, 26, 39, 0.84)), url(${props.img})`,
  };

  return(
    <Link className="galleryImage" style={cardStyle} to={props.link} aria-label={`Learn more about ${props.title}`}>
      <div className="infoBackground">
        <h3 className="bold">{props.title}</h3>
        <p className="paragraph">{props.description}</p>
        <span>Learn more</span>
      </div>
    </Link>
  )
}

export default Pic
