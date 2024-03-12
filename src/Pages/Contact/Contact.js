import Map from '../../Components/Map/Map'

import background from '../../images/cards.jpg';

import './Contact.css'

const contact = () => { 

    return(
        <div style={{paddingTop: '5.5rem'}}>
            <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
                <div className="filter row justify-content-center align-content-center">
                    <h1>Contact</h1>
                    <h6>At Blanchard Horton PLLC we treat your privacy and contact information with the utmost respect.</h6>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                    <div className="map-wrapper">
                    <Map />
                    </div>
                </div>
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                    <div className="text-center" style={{padding: '4rem 3rem'}}>
                        <h3>Contact Us!</h3>
                        <p>If you would like to work with us or have us file a patent, trademark, or copyright application on your behalf.</p>
                        <p>Please contact us by calling this number.</p>
                        <h5 id="desktop-phone">(865) 269-2673</h5>
                        <h5 id="mobile-phone"><a href="tel:865-269-2673">(865) 269-2673</a></h5>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default contact;