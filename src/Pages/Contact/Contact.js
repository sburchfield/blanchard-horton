import Map from '../../Components/Map/Map'

import background from '../../images/cards.jpg';

import './Contact.css'

const contact = () => { 

    return(
        <div className="page-offset">
            <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
                <div className="filter row justify-content-center align-content-center">
                    <h1>Contact</h1>
                    <h6>At Blanchard Horton PLLC we treat your privacy and contact information with the utmost respect.</h6>
                </div>
            </div>
            <section className="contact-shell">
                <div className="contact-copy order-1 order-lg-2">
                    <p className="section-kicker">Contact</p>
                    <h2>Talk with Blanchard Horton PLLC about your intellectual property matter.</h2>
                    <p>If you would like help with a patent, trademark, copyright, trade secret, licensing, or enforcement matter, call the firm to discuss the next step.</p>
                    <div className="button-row contact-actions">
                        <a className="button-primary" href="tel:865-269-2673">(865) 269-2673</a>
                        <a className="contact-directions" href="https://www.google.com/maps/search/?api=1&query=40%20New%20York%20Avenue%20Suite%20300%20Oak%20Ridge%20TN%2037830" target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </div>
                    <div className="contact-details">
                        <div>
                            <h3>Office</h3>
                            <p>40 New York Avenue Suite 300<br />Oak Ridge, TN 37830</p>
                        </div>
                        <div>
                            <h3>Mailing Address</h3>
                            <p>P.O. Box 5657<br />Oak Ridge, TN 37831</p>
                        </div>
                    </div>
                </div>
                <div className="contact-map order-2 order-lg-1">
                    <div className="map-wrapper">
                    <Map />
                    </div>
                </div>
            </section>
        </div>
    ) 
}

export default contact;
