import background from '../../images/1.jpg';

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
            <div className="container about-wrapper" style={{padding: '2rem 0'}}>
            <div className="row align-items-center" style={{padding: '1rem 0'}}>
                <div className="col-12 col-md-5">
                    <div className="card-images" style={{backgroundImage: `url(${background})`}}></div>
                </div>
                <div className="col-12 col-md-7">
                <h3 className="text-center">Our Firm</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
               aliqua. Consectetur purus ut faucibus pulvinar elementum integer enim. 
               Eget arcu dictum varius duis at. Vitae tortor condimentum lacinia quis vel eros donec ac. 
               Dui ut ornare lectus sit amet est placerat in egestas. 
               Scelerisque purus semper eget duis at tellus at urna condimentum. 
               Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. 
               Turpis egestas maecenas pharetra convallis posuere. 
               Mattis rhoncus urna neque viverra justo. 
               Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. 
               Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. 
               Fames ac turpis egestas maecenas pharetra convallis posuere. 
               Lectus vestibulum mattis ullamcorper velit sed ullamcorper.</p>
               <p>
               Tempor nec feugiat nisl pretium fusce id. Ullamcorper malesuada proin libero nunc. 
               Eget duis at tellus at urna condimentum mattis pellentesque. 
               Sapien nec sagittis aliquam malesuada bibendum arcu. 
               Sit amet facilisis magna etiam. Molestie at elementum eu facilisis. 
               Metus dictum at tempor commodo. Cras sed felis eget velit aliquet sagittis id. 
               Dui ut ornare lectus sit amet est. Pharetra pharetra massa massa ultricies. 
               In massa tempor nec feugiat. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. 
               Duis ultricies lacus sed turpis tincidunt id. Et malesuada fames ac turpis egestas integer eget aliquet nibh. 
               Diam vulputate ut pharetra sit amet. Donec et odio pellentesque diam volutpat.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12 col-md-7 order-2 order-md-1">
                <h3 className="text-center">Our History</h3>
                <p>Egestas fringilla phasellus faucibus scelerisque. Diam sollicitudin tempor id eu nisl nunc mi. 
               Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. 
               Quam quisque id diam vel. Ligula ullamcorper malesuada proin libero nunc. Massa id neque aliquam vestibulum. 
               Dui ut ornare lectus sit amet est placerat in egestas. Mattis nunc sed blandit libero. 
               Non tellus orci ac auctor augue. Lacinia quis vel eros donec ac odio. Cursus risus at ultrices mi. 
               Consectetur libero id faucibus nisl. At elementum eu facilisis sed odio morbi quis commodo. 
               Pellentesque eu tincidunt tortor aliquam. Hendrerit gravida rutrum quisque non tellus orci. 
               Aliquet risus feugiat in ante. Porta nibh venenatis cras sed felis. 
               Faucibus vitae aliquet nec ullamcorper sit amet risus.</p>
               <p>
               Faucibus a pellentesque sit amet porttitor eget dolor morbi. 
               Id faucibus nisl tincidunt eget. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. 
               Orci dapibus ultrices in iaculis nunc sed. Et magnis dis parturient montes nascetur ridiculus mus mauris. 
               Cras semper auctor neque vitae tempus quam pellentesque. 
               Consequat mauris nunc congue nisi. Orci nulla pellentesque dignissim enim. 
               Maecenas accumsan lacus vel facilisis volutpat est. 
               Pharetra magna ac placerat vestibulum lectus mauris. 
               Non sodales neque sodales ut etiam sit amet nisl. Gravida quis blandit turpis cursus. 
               Fermentum dui faucibus in ornare quam viverra orci sagittis. 
               Risus ultricies tristique nulla aliquet enim tortor at auctor. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. 
               Purus in mollis nunc sed id semper risus in. Felis eget nunc lobortis mattis aliquam faucibus. 
               In ante metus dictum at tempor commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada. 
               Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Dolor sit amet consectetur adipiscing elit pellentesque. 
               Facilisis sed odio morbi quis commodo odio aenean sed. Volutpat maecenas volutpat blandit aliquam. 
               Tellus pellentesque eu tincidunt tortor aliquam. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. 
               Sagittis orci a scelerisque purus semper. Etiam tempor orci eu lobortis. Amet massa vitae tortor condimentum lacinia quis vel eros. 
               Vitae auctor eu augue ut. Sit amet facilisis magna etiam tempor orci eu. 
               Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Leo a diam sollicitudin tempor id.</p>
                </div>
                <div className="col-12 col-md-5 order-1 order-md-2">
                    <div className="card-images" style={{backgroundImage: `url(${background})`}}></div>
                </div>
            </div>
            </div>
        </div>
    ) 
}

export default about;