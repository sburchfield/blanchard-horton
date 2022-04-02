import Map from '../../Components/Map/Map'


import background from '../../images/4.jpg';

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
                <div className="col-6">
                    <div style={{"borderRadius": "0.6rem", "padding" : "3rem"}}>
                    <Map 
                    isMarkerShown 
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
                    </div>
                </div>
                <div className="col-6">
                    <div className="text-center" style={{padding: '4rem 0'}}>
                        <h3>Contact Us!</h3>
                        <p>If you would like to work with us or have us file a patten on your behalf.</p>
                        <p>Please contact us by calling this number.</p>
                        <h5>(865) 269-2673</h5>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default contact;