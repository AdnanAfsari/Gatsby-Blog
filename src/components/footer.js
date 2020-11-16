import React from "react"

const Footer = () => (

	<footer
		style={{
      marginTop: `2rem`,
      marginBottom: "40px",
      textAlign: "center",
    }}>
    	© {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
)
 
export default Footer
