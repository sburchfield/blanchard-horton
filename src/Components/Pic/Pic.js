import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Pic.css'

const scrollWithOffset = (el, offset) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
}


function Pic (props){

  let fontColorValue = '#fff';
  let linkColorValue = 'white';

  const [image] = useState(props.img)
  const [headerStyle, setHeaderStyle] = useState({padding: '1.5rem 0'})
  const [infoBgStyle, setInfoBgStyle] = useState({top: '70%', backgroundColor: props.bgColorValue, color: fontColorValue})

  let visitLink

  if(props.link){
    visitLink = <Link smooth="true" to={props.link} custom="Healthcare" className={linkColorValue} scroll={el => scrollWithOffset(el, 175)}>More...</Link>
  }

  const mouseEnterHandler = () => {
    setHeaderStyle({padding: '0.75rem 0 0.25rem 0'})
    setInfoBgStyle({top: '0', backgroundColor: props.bgColorValue, color: fontColorValue})
  }

  const mouseLeaveHandler = () => {
    setHeaderStyle({padding: '1.5rem 0'})
    setInfoBgStyle({top: '70%', backgroundColor: props.bgColorValue, color: fontColorValue})
  }

  return(
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="galleryImage" style={{backgroundImage: `url(${image})`}}>
      <div className="infoBackground" style={infoBgStyle}>
        <h3 className="bold" style={headerStyle}>{props.title}</h3>
        <p className="paragraph">{props.description}</p>
        {visitLink}
      </div>
    </div>
  )
}

export default Pic
