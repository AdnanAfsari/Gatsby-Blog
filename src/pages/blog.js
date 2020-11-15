/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import BlogUser from "../images/BlogUser"
import Calender from "../images/Calender"

const BlogPage = ({ data }) => (
	<React.Fragment>
		
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<div
			style={{
      margin: "0 auto",
      maxWidth: "75%",
      padding: `0 1.0875rem 1.45rem`,
      textAlign: "center",
    }}
		>
			<ul
				style={{
          listStyle: "none",

        }}>
      {data.allWordpressPost.edges.map(post => (
				<li
					style={{
            padding: "20px 0",
            borderBottom: "1px solid #ccc",
          }}>
					<Link
						style={{
              color: "black",
              textDecoration: "none",
            }}
            to={`/post/${post.node.slug}`}
          >
						<Img
							style={{
                width: "100%",
                marginRight: "20px",
              }}
              sizes={post.node.acf.feat_img.localFile.childImageSharp.sizes}
              alt={post.node.title}
            />
            <div style={{ width: "100%", }}>
							<Heading
								style={{
                  marginBottom: 0,
                  fontSize: "1.5rem",

                }}
                dangerouslySetInnerHTML={{ __html: post.node.title }}
              />
							<p
								style={{
                  margin: 0,
                  color: "#6d6d6d",
                }}>
								<BlogUser/> {post.node.author.name} <Calender /> {post.node.date}
              </p>
							<div
								dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
			</ul>
		</div>
  </React.Fragment>
)

export default BlogPage

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
