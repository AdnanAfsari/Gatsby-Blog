import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		
    <ul style={{ listStyle: "none", }}>
      {data.allWordpressPost.edges.map(post => (
				<li
					style={{
            padding: "20px 0",
            borderBottom: "1px solid #ccc",
          }}>
					<Link
						style={{
              display: "flex",
              color: "black",
              textDecoration: "none",
            }}
            to={`/post/${post.node.slug}`}
          >
						<Img
							style={{
                width: "25%",
                marginRight: "20px",
              }}
              sizes={post.node.acf.feat_img.localFile.childImageSharp.sizes}
              alt={post.node.title}
            />
            <div style={{ width: "75%", }}>
							<h3
								style={{
                  marginBottom: 0,
                  fontFamily: "Roboto",
                  fontSize: "2.4rem",

                }}
                dangerouslySetInnerHTML={{ __html: post.node.title }}
              />
							<p
								style={{
                  margin: 0,
                  color: "grey",
                  fontFamily: "Merriweather",
                }}>
                Written by {post.node.author.name} on {post.node.date}
              </p>
							<div
								style={{
                  fontFamily: "Merriweather",
                }}
								dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          acf {
            feat_img {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
