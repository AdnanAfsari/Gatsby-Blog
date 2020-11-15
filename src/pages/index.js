import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <React.Fragment>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h2>Hi there</h2>
    
  </React.Fragment>
)

export default IndexPage



