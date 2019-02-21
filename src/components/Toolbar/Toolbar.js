import React from 'react';
import { Link } from 'gatsby'

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import './Toolbar.css'

const toolbar = props => (
  <header className= "toolbar">
    <nav className= "toolbar_navigation">
      
      <div className="toolbar_login"><a href="/">LOGIN</a></div>
      <div className="toolbar_logo"><a href="/">SUBSCRIBE</a></div>
      <div className= "spacer"></div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Sbscription</a></li>
          <li><Link>Another Thing</Link></li>
          <li><a href="/">Users</a></li>
          
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar;