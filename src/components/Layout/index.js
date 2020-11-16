import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"

import "./global.css"

const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      <div>
				<main>{children}</main>
        <footer style={{ marginTop: `2rem`,}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
