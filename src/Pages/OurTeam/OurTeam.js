import {Row} from 'reactstrap'

import JohnImage from '../../images/john-avatar.jpg';
import JakeImage from '../../images/jake-avatar.jpg';
import background from '../../images/cards.jpg';


import './OurTeam.css';

const ourTeam = () => { 

    return(
        <div id="ourTeam" style={{paddingTop: '5.5rem', paddingBottom: '2rem'}}>
            <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
                <div className="filter row justify-content-center align-content-center">
                    <h1>Our Team</h1>
                    <h6>Over 40 years of combined experience in intellectual property law.</h6>
                </div>
            </div>
            <Row className="justify-content-center our-team-section-wrapper">
            <div className="col-12 col-lg-6">
                <div className="aboutSectionWrapper card">
                <div>
                    <div className="aboutSectionImage" style={{backgroundImage: `url( ${JohnImage} )`}}></div>
                </div>
                <h4 className="aboutSectionHeader">JONATHAN M. BLANCHARD, Ph.D.</h4>
                <div>
                    <div>
                        <div className="aboutSectionText">
                            <div>
                                <p>Dr. Blanchard is a member at Blanchard Horton PLLC. Jonathan provides legal services in the area of intellectual property law, including patents, trademarks, copyrights, trade secrets, and product designs. Jonathan specializes in patent portfolio management and engages in enforcement actions to protect the current and future business opportunities of clients. He has developed patent portfolios that were licensed to settle multi-million-dollar litigation between international corporations and to exclude competitors from markets.</p>
                                <p>For more than fifteen years, Jonathan has successfully converted complex technology assets into valuable U.S. and international property rights for clients, effectively prosecuted complex reissue and reexamination applications, and diligently pursued appeals to the Patent Trial and Appeal Board and the Federal Circuit. He provides due diligence evaluations and opinions regarding the strength, validity, and value of existing patent rights, including opinions in the context of Hatch-Waxman litigation, and has extensive experience with the development, implementation, and defense of design-around strategies.</p>
                                <p>Jonathan has substantial experience with organic and inorganic chemistry as well as with the electrical and mechanical arts. Specific technologies include:</p>
                                <ul className="experience">
                                    <li><b>Chemistry:</b> Analytic blood analyte sensors using electrochemical, optical or colorimetric detection with chemical or biological analysis; Trace metal HPLC and other water-based analytic techniques; Pharmaceutical AI’s, formulations, and drug delivery systems; Separation Technologies including enantiomers; Small-molecule catalysts; Phase modifiers including dispersants, emulsions, suspensions, and surfactants; Ore extraction and processing.</li>
                                    <li><b>Materials:</b> Reactive surfaces including electrodes, batteries, and substrate attached catalysts; Polymers including conductive, oxygen excluding, non-linear optic, and Bone replacement; Coatings; Fibers; Semi-conductive materials including thermoelectrics; Nanoscale materials; OLED materials.</li>
                                    <li><b>Electrical:</b> Processing and compensation of analyte responsive output signals; Sound processing; Adaptive noise cancellation; Acoustical drivers.</li>
                                    <li><b>Mechanical:</b> Microfluidic devices; Medical devices including catheters, orthopedic implants, and Refrigeration and refrigeration physics; Automotive components.</li>
                                </ul>
                                <p>Jonathan received his Doctorate in Organometallic Chemistry and a second Master degree in Inorganic Chemistry from Washington University, St. Louis; his first Master degree in Organic Chemistry from Syracuse University; and his Bachelor’s degree in Chemistry from Centre College. He graduated from the University of Kentucky College of Law in 2000, before entering private law practice in Chicago.</p>
                                <p>Jonathan is admitted to practice law in the State of Tennessee, the State of Illinois, the Commonwealth of Kentucky, and before the United States Patent and Trademark Office, the U.S. Court of Appeals for the Federal Circuit, and the U.S. District Court for the Northern District of Illinois. He is a member of the Knoxville Bar Association, Kentucky Bar Association, Intellectual Property Owners Association, and the American Chemical Society.</p>
                                <div>
                                    <div>
                                        <h5>Practice Areas</h5>
                                        <ul>
                                            <li>Intellectual Property Procurement and Enforcement</li>
                                            <li>Intellectual Property Licensing</li>
                                            <li>Technology Management</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Education and Academic Honors</h5>
                                        <ul>
                                            <li>J.D., University of Kentucky College of Law.</li>
                                            <li>Ph.D., Organometallic Chemistry, Washington University, St. Louis.</li>
                                            <li>A.M., Inorganic Chemistry, Washington University, St. Louis.</li>
                                            <li>M.S., Organic Chemistry, Syracuse University.</li>
                                            <li>B.S., Chemistry, Centre College.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Professional Associations</h5>
                                        <ul>
                                            <li>Knoxville Bar Association</li>
                                            <li>Kentucky Bar Association</li>
                                            <li>Intellectual Property Owners Association</li>
                                            <li>American Chemical Society</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Bar Admissions</h5>
                                        <ul>
                                            <li>United States Patent and Trademark Office</li>
                                            <li>State of Tennessee</li>
                                            <li>State of Illinois</li>
                                            <li>Commonwealth of Kentucky</li>
                                            <li>U.S. Court of Appeals for the Federal Circuit</li>
                                            <li>U.S. District Court for the Northern District of Illinois</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="aboutSectionWrapper card">
                <div>
                    <div className="aboutSectionImage" style={{backgroundImage: `url(${JakeImage})`}}></div>
                </div>
                <h4 className="aboutSectionHeader">JACOB G. HORTON</h4>
                <div>
                    <div>
                        <div className="aboutSectionText">
                            <div>
                                <p>Mr. Horton is a member in the law firm of Blanchard Horton PLLC and practices in all areas of intellectual property law, including patents, trademarks, copyrights, trade dress, and trade secrets.  Jake’s practice includes intellectual property procurement, as well as licensing and acquisition of intellectual property rights, and intellectual property enforcement and litigation. Jake has developed and managed large brand portfolios for several international companies and has represented clients in numerous federal lawsuits involving complex intellectual property issues and parties in diverse jurisdictions.</p>
                                <p>Jake has substantial experience in trademark law, asset purchase agreements involving large intellectual property holdings, intellectual property litigation and enforcement, and patent prosecution in the mechanical and materials science fields. Specific technologies include:</p>
                                <ul className="experience">
                                    <li><b>Mechanical:</b> Complex mechanical devices including heavy machinery; Vehicles and automotive devices; Machine tools and systems; Firearms and firearm accessories; Complex manufacturing machines and systems.</li>
                                    <li><b>Materials Science:</b> Ballistic materials including transparent armor, sintered ceramics, and compound projectiles; Semi-conductive materials including photovoltaic materials and thermoelectrics; Nanoscale materials; Concrete and composite materials for large structures.</li>
                                    <li><b>Methods:</b> Business methods in the fields of agriculture, land development, finance, data acquisition, and marketing; Manufacturing methods involving complex assemblies of components and complex chemical systems.</li>
                                </ul>
                                <p>Jake received a Bachelor of Science in Civil and Environmental Engineering, cum laude, from the University of Tennessee in 2002. He received a Doctor of Jurisprudence from the University of Tennessee College of Law in 2006 with a concentration in Advocacy and Dispute Resolution.</p>
                                <p>Jake is currently licensed to practice law in the State of Tennessee and is licensed to practice before the United States Patent and Trademark Office. Jake is admitted to practice before the Tennessee Supreme Court, The United States District Court for the Eastern District of Tennessee, The United States District Court for the Middle District of Tennessee, and the United States District Court for the District of Colorado. Jake is also a member of the Knoxville Bar Association and the Tennessee Bar Association.</p>
                                <div>
                                    <div>
                                        <h5>Practice Areas</h5>
                                        <ul>
                                            <li>Patent and Trademark Procurement and Enforcement</li>
                                            <li>Intellectual Property Licensing</li>
                                            <li>Brand Management</li>
                                            <li>Mergers and Acquisitions Involving Intellectual Property</li>
                                            <li>Intellectual Property Enforcement</li>
                                            <li>Intellectual Property Litigation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Education and Academic Honors</h5>
                                        <ul>
                                            <li>
                                                J.D., University of Tennessee College of Law.
                                                <ul>
                                                    <li>Concentration in Advocacy and Dispute Resolution</li>
                                                </ul>
                                            </li>
                                            <li>B.S., Civil Engineering, cum laude, University of Tennessee.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Professional Associations</h5>
                                        <ul>
                                            <li>Knoxville Bar Association</li>
                                            <li>Tennessee Bar Association</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5>Bar Admissions</h5>
                                        <ul>
                                            <li>United States Patent and Trademark Office</li>
                                            <li>State of Tennessee</li>
                                            <li>U.S. District Court for the Eastern District of Tennessee</li>
                                            <li>U.S. District Court for the Middle District of Tennessee</li>
                                            <li>U.S. District Court for the District of Colorado</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </Row>
        </div>
    ) 
}

export default ourTeam;