import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"


import Header from './header'
// import Toolbar from './Toolbar/Toolbar';
// import SideDrawer from './SideDrawer/SideDrawer';
// import Backdrop from './Backdrop/Backdrop';
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{height: '100%'}}>
          <Header />
          {/* <Toolbar />
          <SideDrawer />
          <Backdrop /> */}
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
      </div>
    )}
  />
)





Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
