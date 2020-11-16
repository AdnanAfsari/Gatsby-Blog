import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"
import Footer from "../footer"
import "./index.css"

const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      <div>
				<main>{children}</main>
				<Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
