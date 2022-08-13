import background from '../../images/tubes.jpg';
import gavel from '../../images/gavel.jpg';
import book from '../../images/book.jpg';

import './About.css'

const about = () => { 

    return(
        <div style={{paddingTop: '5.5rem'}}>
            <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
                <div className="filter row justify-content-center align-content-center">
                    <h1>About</h1>
                    <h6>Excepteur, Officia, & Laborum.</h6>
                </div>
            </div>
            <div className="container about-wrapper">
            <div className="row align-items-center" style={{padding: '1rem 0'}}>
                <div className="col-12 col-lg-5">
                    <div className="card-images" style={{backgroundImage: `url(${gavel})`}}></div>
                </div>
                <div className="col-12 col-lg-7">
                <h3 className="text-center">Our Firm</h3>
                <p>Blanchard Horton PLLC provides expertise in all areas of intellectual property practice, including patents, trademarks, copyrights, trade dress, and trade secrets, in order to help our clients unlock the full potential of their technology assets, to create new business opportunities, to protect existing markets, and to achieve value for their company or organization.  We help our clients acquire intellectual property rights having a purpose, thus providing strategic value in the context of their business goals, competitor holdings, and the current state of the art.</p>
                <p>Collectively, our attorneys have over 40 years of experience preparing, obtaining, and evaluating foreign and domestic patents and trademark registrations, managing intellectual property portfolios, licensing and negotiating asset purchases of intellectual property rights, and litigating complex patent, trademark, unfair competition, and false advertising disputes.  We have extensive experience with practice before the United States Patent and Trademark Office (USPTO), including appeals, reissues, re-examinations before the Patent Trial and Appeal Board (PTAB) and oppositions and cancellations before the Trademark Trial and Appeal Board (TTAB).  We also provide opinions regarding invalidity, non-infringement, and freedom to use.  We advise on strategies regarding design around issues and avoidance of infringement.  We are the experienced attorneys you want on your side when your IP matters.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-lg-7 order-2 order-lg-1">
                <h3 className="text-center">Our History</h3>
                <p>Blanchard Horton PLLC began in 2021 when Dr. Jonathan M. Blanchard and Mr. Jacob G. Horton, who had practiced together at a firm in Knoxville, Tennessee, opened a new boutique intellectual property law firm in Oak Ridge, Tennessee.  Blanchard Horton PLLC provides the highest quality of intellectual property representation to our clients throughout the United States and internationally, including within the Oak Ridge technology corridor and throughout the greater East Tennessee area.  From individual inventors, to startup companies, to large corporate entities, our clients rely on us to assist them with all of their intellectual property needs.</p>
                </div>
                <div className="col-12 col-lg-5 order-1 order-lg-2">
                    <div className="card-images" style={{backgroundImage: `url(${book})`}}></div>
                </div>
            </div>
            </div>
        </div>
    ) 
}

export default about;