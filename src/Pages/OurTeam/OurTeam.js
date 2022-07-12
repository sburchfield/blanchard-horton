import {Row} from 'reactstrap'

import OurTeamSection from '../../Components/OurTeamSection/OurTeamSection'

import JayImage from '../../images/blanchard-avatar.jpg';
import JakeImage from '../../images/jake-avatar.jpg';
import background from '../../images/3.jpg';


import './OurTeam.css';

const ourTeam = () => { 

    return(
        <div style={{paddingTop: '5.5rem'}}>
            <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
                <div className="filter row justify-content-center align-content-center">
                    <h1>Our Team</h1>
                    <h6>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                </div>
            </div>
            <Row className="justify-content-center align-items-center our-team-section-wrapper">
            <OurTeamSection
                firstName={"Jay"}
                lastName={"Blanchard"}
                image={JayImage}
                about={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                backgroundColor={'bg-lin-grad-blue'}
                 />
            <OurTeamSection
                firstName={"Jake"}
                lastName={"Horton"}
                image={JakeImage}
                about={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                backgroundColor={'bg-lin-grad-red'}
                />
            </Row>
        </div>
    ) 
}

export default ourTeam;