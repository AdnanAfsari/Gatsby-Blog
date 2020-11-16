/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import BlogUser from "../images/BlogUser"
import Calender from "../images/Calender"

const BlogPostTemplate = ({ data }) => (
  <React.Fragment>
		<SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
		<div
			style={{
      margin: "0 auto",
      maxWidth: "85%",
      padding: `0 1.0875rem 1.45rem`,
    }}>
			<div
				style={{
        color: "black",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
				<div style={{alignSelf: "center", textAlign: "center",}}>
					<Heading
						style={{
            marginBottom: 0,
            fontSize: "3.5rem",
            alignSelf: "center",
          }}
            dangerouslySetInnerHTML={{ __html: data.wordpressPost.title}}/>
							<p
								style={{
                marginTop: "45px",
                color: "#6d6d6d",
                fontFamily: "Inter",
                fontWeight: "500",
                marginBottom: "83px",
              }}>
								<BlogUser style={{ marginRight: "10px", }} />
								By<span> {data.wordpressPost.author.name} </span>
								<Calender style={{ marginRight: "5px", marginLeft: "40px", }} />
								<span>{data.wordpressPost.date}</span>
              </p>
						</div>
						<Img
							style={{
              width: "100%",
              marginBottom: "100px",
              height: "600px",
            }}
              sizes={data.wordpressPost.acf.feat_img.localFile.childImageSharp.sizes}
      				alt={data.wordpressPost.title}
            />
						<article
							style={{
              width: "60%",
              alignSelf: "center",
              fontSize: "2rem",
              lineHeight: 1.6,
              letterSpacing: "normal",
            }}
					>
							<article className="Article"
								dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
            </article>
          </div>
		</div>
	</React.Fragment>  
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      acf {
        feat_img {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1200) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
