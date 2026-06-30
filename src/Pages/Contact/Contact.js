import Map from '../../Components/Map/Map'

import background from '../../images/cards.jpg';

import './Contact.css'

const contact = () => { 
    const contactItems = [
        {
            label: 'Phone',
            value: '(865) 269-2673',
            href: 'tel:8652692673'
        },
        {
            label: 'Office',
            value: '40 New York Avenue Suite 300, Oak Ridge, TN 37830'
        },
        {
            label: 'Mailing Address',
            value: 'P.O. Box 5657, Oak Ridge, TN 37831'
        }
    ];

    const nextSteps = [
        'A brief description of the technology, brand, work, or dispute involved',
        'Any known deadlines, office actions, demands, or filing dates',
        'The business goal you want the IP work to support'
    ];

    return(
        <div className="page-offset">
            <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
                <div className="filter row justify-content-center align-content-center">
                    <h1>Contact</h1>
                    <h6>At Blanchard Horton PLLC we treat your privacy and contact information with the utmost respect.</h6>
                </div>
            </div>

            <section className="contact-hero section-shell">
                <div className="contact-hero-copy">
                    <p className="section-kicker">Start a conversation</p>
                    <h2>Talk with Blanchard Horton PLLC about your intellectual property matter.</h2>
                    <p>If you would like help with a patent, trademark, copyright, trade secret, licensing, or enforcement matter, call the Oak Ridge office to discuss the next step.</p>
                    <div className="button-row contact-actions" aria-label="Contact actions">
                        <a className="button-primary" href="tel:8652692673">(865) 269-2673</a>
                        <a className="contact-directions" href="https://www.google.com/maps/search/?api=1&query=40%20New%20York%20Avenue%20Suite%20300%20Oak%20Ridge%20TN%2037830" target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </div>
                </div>
                <aside className="contact-card" aria-label="Contact information">
                    {contactItems.map((item) => (
                        <div className="contact-card-row" key={item.label}>
                            <span>{item.label}</span>
                            {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                        </div>
                    ))}
                </aside>
            </section>

            <section className="contact-main">
                <div className="contact-map-panel">
                    <div className="map-wrapper">
                        <Map />
                    </div>
                    <div className="contact-map-caption">
                        <strong>Oak Ridge Office</strong>
                        <span>Located near the Oak Ridge technology corridor and serving clients nationwide.</span>
                    </div>
                </div>

                <div className="contact-guidance">
                    <p className="section-kicker">Helpful to have ready</p>
                    <h2>What to share when you call</h2>
                    <p>Initial conversations are most productive when the firm can quickly understand the asset, the deadline, and the business objective.</p>
                    <div className="contact-step-list">
                        {nextSteps.map((step, index) => (
                            <div className="contact-step" key={step}>
                                <span>{index + 1}</span>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                    <div className="contact-note">
                        <h3>Privacy and confidentiality</h3>
                        <p>Please avoid sending confidential or time-sensitive information until the firm has confirmed that it can represent you. Calling first helps the attorneys check fit, timing, and any potential conflicts.</p>
                    </div>
                </div>
            </section>
        </div>
    ) 
}

export default contact;
