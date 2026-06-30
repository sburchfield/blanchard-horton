import background from '../../images/tubes.jpg';
import gavel from '../../images/gavel.jpg';
import book from '../../images/book.jpg';
import { Link } from 'react-router-dom';

import './About.css'

const about = () => { 
    const values = [
        {
            title: 'Purpose-built rights',
            text: 'Protection is shaped around business goals, competitor holdings, and the current state of the art.'
        },
        {
            title: 'Technical fluency',
            text: 'The firm brings scientific, engineering, prosecution, licensing, and litigation experience to IP matters.'
        },
        {
            title: 'Portfolio judgment',
            text: 'Clients receive practical guidance for acquisition, evaluation, management, and enforcement of IP assets.'
        },
        {
            title: 'Forum experience',
            text: 'The attorneys practice before the USPTO, PTAB, and TTAB, and advise on infringement and freedom-to-use issues.'
        }
    ];

    const clients = [
        'Individual inventors',
        'Startup companies',
        'Technology businesses',
        'Research organizations',
        'Established companies',
        'National and international clients'
    ];

    return(
        <div className="page-offset">
            <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
                <div className="filter row justify-content-center align-content-center">
                    <h1>About</h1>
                    <h6>Value in Protection.</h6>
                </div>
            </div>
            <section className="section-shell about-intro about-split">
                <div>
                    <p className="section-kicker">The firm</p>
                    <h2 className="section-title">Boutique intellectual property counsel with technical depth.</h2>
                </div>
                <div>
                    <p className="section-lede">Blanchard Horton PLLC helps clients identify, protect, and use intellectual property rights in ways that support business goals, market position, and long-term technology value.</p>
                    <p className="about-intro-copy">The firm is based in Oak Ridge, Tennessee and serves clients throughout the United States and internationally, including the Oak Ridge technology corridor and greater East Tennessee.</p>
                </div>
                <div className="about-facts" aria-label="Firm highlights">
                    <div><strong>2021</strong><span>Founded in Oak Ridge, Tennessee</span></div>
                    <div><strong>40+</strong><span>Years combined IP experience</span></div>
                    <div><strong>USPTO</strong><span>Patent and trademark practice</span></div>
                </div>
            </section>

            <section className="about-values" aria-label="How the firm works">
                <div className="about-values-inner">
                    {values.map((value) => (
                        <article className="about-value-card" key={value.title}>
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-story section-shell">
                <article className="about-story-panel">
                    <div className="about-story-image" style={{backgroundImage: `url(${gavel})`}} aria-hidden="true"></div>
                    <div className="about-story-copy">
                        <p className="section-kicker">Our firm</p>
                        <h3>IP protection with business context.</h3>
                        <p>Blanchard Horton PLLC provides expertise in patents, trademarks, copyrights, trade dress, and trade secrets to help clients unlock the full potential of their technology assets, create new business opportunities, protect existing markets, and achieve value for their company or organization.</p>
                        <p>The firm helps clients acquire intellectual property rights having a purpose, providing strategic value in the context of business goals, competitor holdings, and the current state of the art.</p>
                    </div>
                </article>

                <article className="about-story-panel about-story-panel-reverse">
                    <div className="about-story-image" style={{backgroundImage: `url(${book})`}} aria-hidden="true"></div>
                    <div className="about-story-copy">
                        <p className="section-kicker">Our history</p>
                        <h3>Founded for focused IP representation.</h3>
                        <p>Blanchard Horton PLLC began in 2021 when Dr. Jonathan M. Blanchard and Mr. Jacob G. Horton, who had practiced together at a firm in Knoxville, Tennessee, opened a new boutique intellectual property law firm in Oak Ridge, Tennessee.</p>
                        <p>Collectively, the attorneys have over 40 years of experience preparing, obtaining, and evaluating foreign and domestic patents and trademark registrations, managing IP portfolios, licensing and negotiating asset purchases, and litigating complex patent, trademark, unfair competition, and false advertising disputes.</p>
                    </div>
                </article>
            </section>

            <section className="about-clients">
                <div className="about-clients-inner">
                    <div>
                        <p className="section-kicker">Who we serve</p>
                        <h2>Focused counsel for clients building, protecting, and using technology assets.</h2>
                    </div>
                    <div className="about-client-list" aria-label="Client types">
                        {clients.map((client) => (
                            <span key={client}>{client}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-cta section-shell">
                <div>
                    <p className="section-kicker">Next step</p>
                    <h2>Talk with a firm built around intellectual property matters.</h2>
                    <p>Call the Oak Ridge office or review the firm's practice areas to see how Blanchard Horton PLLC can help with patents, trademarks, copyrights, trade secrets, and related technology asset issues.</p>
                </div>
                <div className="button-row">
                    <a className="button-primary" href="tel:+18652692673">(865) 269-2673</a>
                    <Link className="button-secondary about-cta-secondary" to="/services">Explore Services</Link>
                </div>
            </section>
        </div>
    ) 
}

export default about;
