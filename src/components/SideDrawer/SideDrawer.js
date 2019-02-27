import React from 'react';
import { Link } from 'gatsby'

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if(props.show) {
    drawerClasses = ['side-drawer', 'open']
  }

  return (
  <nav className={drawerClasses.join(' ')}>
    <ul>
    <li><Link to="/about/instructor">Meet the Instructor</Link></li>
    <li><Link to="/about/dnajourney">DNA Journey</Link></li>
    <li><Link to="/about/pastors">Pastors</Link></li>
    <li><a href="https://www.dnaofaleader.com/#registration-section">Conference</a></li>
    </ul>
  </nav>
  );
} 

export default sideDrawer;