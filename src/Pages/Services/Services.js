import React from 'react';
import { Link } from 'react-router-dom';

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

const servicePathways = [
  "Protect an invention",
  "Clear and register a brand",
  "Manage IP rights",
  "Enforce or defend a position"
];

const serviceGroups = [
  {
    title: "Patents",
    eyebrow: "Inventions, methods, compositions, and designs",
    summary: "Patent counsel for technical assets from early patentability review through prosecution, portfolio strategy, opinions, and contested proceedings.",
    bestFor: "Inventors, technology companies, manufacturers, and research-driven organizations.",
    background: background1,
    icon: <GoLaw className="practice-icon" />,
    groups: [
      {
        label: "Search & Strategy",
        items: ["Patentability Searches", "Patentability / Non-Infringement Opinions", "Right To Use / Clearance Opinions"]
      },
      {
        label: "Applications",
        items: ["Preparing and Filing Patent Applications", "International (PCT) Patent Applications", "Reissue and Reexamination"]
      },
      {
        label: "Analysis & Disputes",
        items: ["Infringement Analysis", "Validity, Invalidity, and Enforceability Analysis", "Inter-Partes Review and Post-Grant Review", "Patent Infringement Pre Litigation and Litigation"]
      },
      {
        label: "Transactions",
        items: ["Licenses, Assignments, and Asset Transfer", "Enforcement / Cease and Desist"]
      }
    ]
  },
  {
    title: "Trademarks",
    eyebrow: "Brand names, logos, trade dress, and indicia",
    summary: "Trademark services for selecting, clearing, registering, maintaining, licensing, and enforcing distinctive brand assets.",
    bestFor: "Companies launching new brands, expanding product lines, or protecting established marks.",
    background: background2,
    icon: <FaTrademark className="practice-icon" />,
    groups: [
      {
        label: "Clearance",
        items: ["Trademark Searches", "Right To Use / Clearance Opinions"]
      },
      {
        label: "Registration",
        items: ["Preparing and Filing State and U.S. Trademark Applications", "Foreign Trademark Applications (Madrid Protocol)", "Trademark Registration Maintenance"]
      },
      {
        label: "Proceedings & Enforcement",
        items: ["Opposition / Cancellation Proceedings", "Infringement Analysis", "Enforcement / Cease and Desist", "Trademark Infringement / Unfair Competition / False Advertising Litigation"]
      },
      {
        label: "Transactions",
        items: ["Licenses, Assignments, and Asset Transfer"]
      }
    ]
  },
  {
    title: "Trade Secrets",
    eyebrow: "Confidential formulas, recipes, processes, and know-how",
    summary: "Trade secret counsel for identifying sensitive business information, building protection systems, and responding when confidential information is at risk.",
    bestFor: "Businesses with proprietary processes, confidential data, manufacturing knowledge, or employee-access concerns.",
    background: background4,
    icon: <FaKey className="practice-icon" />,
    groups: [
      {
        label: "Protection Systems",
        items: ["Consultation Regarding Trade Secret Protection", "Trade Secret Development and Maintenance", "Trade Secret Inventory and Analysis"]
      },
      {
        label: "Agreements",
        items: ["Joint Development Agreements", "Cross-Licensing", "Employment Agreements"]
      },
      {
        label: "Response & Enforcement",
        items: ["Investigation of Trade Secret Misappropriation and Corporate Espionage", "Enforcement / Cease and Desist / Litigation"]
      }
    ]
  },
  {
    title: "Copyrights",
    eyebrow: "Creative works, software, written materials, and media",
    summary: "Copyright guidance for evaluating protectable works, filing applications, licensing rights, and enforcing against unauthorized use.",
    bestFor: "Businesses and creators with software, documentation, marketing materials, publications, or other creative assets.",
    background: background3,
    icon: <FaRegCopyright className="practice-icon" />,
    groups: [
      {
        label: "Registration",
        items: ["Consultation Regarding Copyrightability", "Preparing and Filing U.S. Copyright Applications"]
      },
      {
        label: "Rights & Transactions",
        items: ["Copyright Infringement Analysis", "Licenses, Assignments, and Asset Transfer"]
      },
      {
        label: "Enforcement",
        items: ["Enforcement / Cease and Desist", "Copyright Infringement Litigation"]
      }
    ]
  }
];


const services = (props) => {


return(
    <div className="page-offset">
      <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
          <div className="filter row justify-content-center align-content-center">
              <h1>Services</h1>
              <h6>Exceptional Service in Intellectual Property.</h6>
          </div>
      </div>
      <section className="section-shell services-intro">
        <p className="section-kicker">Practice areas</p>
        <h2 className="section-title">Practical intellectual property counsel for complex technologies and valuable brands.</h2>
        <p className="section-lede">Blanchard Horton PLLC supports clients across procurement, portfolio management, opinions, licensing, enforcement, and disputes. The goal is not just a filing; it is protection that makes sense in the context of the client's market, competitors, and technology roadmap.</p>
        <div className="service-pathways" aria-label="Common service pathways">
          {servicePathways.map((pathway) => (
            <span key={pathway}>{pathway}</span>
          ))}
        </div>
      </section>
      <section className="practice-blocks" aria-label="Intellectual property services">
        {serviceGroups.map((service) => (
          <article className="practice-block" key={service.title}>
            <div className="practice-media" style={{backgroundImage: `linear-gradient(180deg, rgba(18, 26, 39, 0.16), rgba(18, 26, 39, 0.82)), url(${service.background})`}}>
              <div className="practice-media-content">
                {service.icon}
                <p>{service.eyebrow}</p>
                <h3>{service.title}</h3>
              </div>
            </div>
            <div className="practice-content">
              <div className="practice-summary">
                <p>{service.summary}</p>
                <div>
                  <strong>Best for</strong>
                  <span>{service.bestFor}</span>
                </div>
              </div>
              <div className="practice-groups">
                {service.groups.map((group) => (
                  <div className="practice-group" key={group.label}>
                    <h4>{group.label}</h4>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="service-cta">
        <div>
          <p className="section-kicker">Ready to discuss a matter?</p>
          <h2>Talk with an IP attorney about your next step.</h2>
        </div>
        <div className="button-row">
          <a className="button-primary" href="tel:865-269-2673">Call (865) 269-2673</a>
          <Link className="service-cta-link" to="/contact">View Contact Details</Link>
        </div>
      </section>
  </div>
  )
}


export default services;
