import React from 'react';

import AniCard from '../../Components/AniCard/AniCard'

import './Services.css'

import background from '../../images/barometer.jpg';

import background1 from '../../images/McCarthy_Binding.jpg';
import background2 from '../../images/scales.jpg';
import background3 from '../../images/keyboard.jpg';
import background4 from '../../images/medications.jpg';

import { GoLaw } from "react-icons/go";
import { FaRegCopyright } from "react-icons/fa";
import { FaTrademark } from "react-icons/fa";
import { FaKey } from "react-icons/fa";


const services = (props) => {


return(
    <div style={{paddingTop: '5.5rem'}}>
      <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
          <div className="filter row justify-content-center align-content-center">
              <h1>Services</h1>
              <h6>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
          </div>
      </div>
      <div className="ani-card-container">
      <div className="row justify-content-center">
        <AniCard
          title={"Patents"}
          text={"Protection for devices, methods, compositions of matter, and designs"}
          li={["Patentability Searches","Patentability / Non-Infringement Opinions","Preparing and Filing Patent Applications", "International (PCT) Patent Applications", "Right To Use / Clearance Opinions", "Infringement Analysis", "Patent Validity, Invalidity, and Enforceability Analysis", "Reissue, Reexamination, Derivation, Inter-Partes Review, and Post-Grant Review", "Licenses, Assignments, and Asset Transfer", "Enforcement / Cease and Desist", "Patent Infringement Pre Litigation and Litigation"]}
          background={background1}
          icon={<GoLaw className="circle-icon" />}/>
        <AniCard
          title={"Trade Secrets"}
          text={"Protection for formulas, recipes, and manufacturing secrets."}
          li={["Consultation Regarding Trade Secret Protection","Trade Secret Development and Maintenance","Trade Secret Inventory and Analysis", "Joint Development Agreements", "Cross-Licensing", "Employment Agreements", "Investigation of Trade Secret Misappropriation and Corporate Espionage", "Enforcement / Cease and Desist / Litigation"]}
          background={background4}
          icon={<FaKey className="circle-icon" />}/>
        <AniCard
          title={"Trademarks"}
          text={"Exclusive rights for brand names, logos, and indicia."}
          li={["Trademark Searches","Right To Use / Clearance Opinions","Preparing and Filing State and U.S. Trademark Applications", "Foreign Trademark Applications (Madrid Protocol)", "Trademark Registration Maintenance", "Opposition / Cancellation Proceedings", "Infringement Analysis", "Licenses, Assignments, and Asset Transfer", "Enforcement / Cease and Desist", "Trademark Infringement / Unfair Competition / False Advertising Litigation"]}
          background={background2}
          icon={<FaTrademark className="circle-icon" />}/>
        <AniCard
          title={"Copyrights"}
          text={"The right to publish, perform, display and reproduce creative works of art and literature."}
          li={["Consultation Regarding Copyrightability","Preparing and Filing U.S. Copyright Applications","Copyright Infringement Analysis", "Licenses, Assignments, and Asset Transfer", "Enforcement / Cease and Desist", "Copyright Infringement Litigation"]}
          background={background3}
          icon={<FaRegCopyright className="circle-icon" />}/>
      </div>
      </div>
  </div>
  )
}


export default services;
