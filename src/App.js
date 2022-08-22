import React, {Component} from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom'

import ReactGA from 'react-ga';

import RouteChangeTracker from './Components/RouteChangeTracker/RouteChangeTracker'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import OurTeam from './Pages/OurTeam/OurTeam'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import Backdrop from './Components/Backdrop/Backdrop';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

import Toolbar from './Components/Toolbar/Toolbar'
import Footer from './Components/Footer/Footer'

import './App.css';

const TRACKING_ID = "UA-238309252-1"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

class App extends Component {

constructor(props){
   super(props)
   this.state = {
     sideDrawerOpen: false,
     lightboxIsOpen: false,
     done: false,
       }
    }

    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
      })
    }

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
    };

  render(){
    let backdrop

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
        <BrowserRouter>
        <RouteChangeTracker />
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} click={this.drawerToggleClickHandler}/>
        {backdrop}
          <React.Fragment>
            <ScrollToTop />
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/about'} component={About} />
              <Route path={'/our-team'} component={OurTeam} />
              <Route path={'/services'} component={Services} />
              <Route path={'/contact'} component={Contact} />
            </Switch>
          </React.Fragment>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;