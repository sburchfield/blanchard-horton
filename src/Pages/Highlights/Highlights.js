import HighlightDetails from '../../Components/HighlightDetails/HighlightDetails'

import background from '../../images/5.jpg';

const hightlights = () => {
    return (
        <div style={{paddingTop: '5.5rem'}}>
            <div className="inner-header-wrapper white text-center" style={{backgroundImage: `url( ${background})`}}>
                <div className="filter row justify-content-center align-content-center">
                    <h1>Highlights</h1>
                    <h6>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                </div>
            </div>
            <HighlightDetails />
        </div>
    )
}

export default hightlights;