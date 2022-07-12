import React from 'react';

import AniCard from '../../Components/AniCard/AniCard'

import './Services.css'

import background from '../../images/2.jpg';

import background1 from '../../images/1.jpg';
import background2 from '../../images/2.jpg';
import background3 from '../../images/3.jpg';

import { GoLaw } from "react-icons/go";
import { FaRegCopyright } from "react-icons/fa";
import { FaTrademark } from "react-icons/fa";


const services = (props) => {


return(
    <div style={{paddingTop: '5.5rem'}}>
      <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
          <div className="filter row justify-content-center align-content-center">
              <h1>Services</h1>
              <h6>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
          </div>
      </div>
      <div className="container ani-card-container">
      <div className="row justify-content-center">
        <AniCard
          title={"Patents"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          li={["Erat velit scelerisque in dictum","Quis viverra nibh","Mauris cursus mattis"]}
          background={background1}
          icon={<GoLaw className="circle-icon" />}/>
        <AniCard
          title={"Trademarks"}
          text={"Pharetra pharetra massa massa ultricies turpis tincidunt id."}
          li={["Odio morbi","Orci nulla","In dictum non consectetur"]}
          background={background2}
          icon={<FaTrademark className="circle-icon" />}/>
        <AniCard
          title={"Copyrights"}
          text={"Fames ac turpis egestas maecenas pharetra convallis posuere morbi. "}
          li={["Urna condimentum","Ornare arcu","Eget lorem dolor"]}
          background={background3}
          icon={<FaRegCopyright className="circle-icon" />}/>
      </div>
      </div>
  </div>
  )
}


export default services;
