import React from 'react';
import { Link } from 'gatsby'

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import './Toolbar.css'

const toolbar = props => (
  <header className= "toolbar">
    <nav className= "toolbar_navigation">
      
      <div className="toolbar_login"><a href="/">LOGIN</a></div>
      <div className="toolbar_logo"><Link to="/subscription">SUBSCRIBE</Link></div>
      <div className= "spacer"></div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><Link to="/about/instructor">Meet the Instructor</Link></li>
          <li><Link to="/about/DNAJourney">DNA Journey</Link></li>
          <li><Link to="/about/pastors">Pastors</Link></li>
          
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar;