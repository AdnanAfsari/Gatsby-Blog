/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
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
    }}
		>
			<ul
				style={{
          listStyle: "none",

        }}>
      {data.allWordpressPost.edges.map(post => (
				<li
					key={Math.floor((Math.random() * 1000) + 1)}
					style={{
            padding: "20px 0",
            borderBottom: "1px solid #ccc",
          }}>
					<Link
						style={{
              color: "black",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            to={`/post/${post.node.slug}`}
					>
						<div style={{alignSelf: "center", textAlign: "center",}}>
							<Heading
								style={{
                  marginBottom: 0,
                  fontSize: "3.5rem",
                  alignSelf: "center",
                }}
                dangerouslySetInnerHTML={{ __html: post.node.title }}
              />
							<p
								style={{
                  marginTop: "45px",
                  color: "#6d6d6d",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  marginBottom: "83px",
                }}>
								<BlogUser style={{marginRight: "10px",}}/>By<span> {post.node.author.name} </span><Calender style={{marginRight: "5px", marginLeft: "40px",}} /> <span>{post.node.date}</span>
              </p>
						</div>
						<Img
							style={{
                width: "100%",
                height: "600px",
                marginBottom: "100px",
              }}
              sizes={post.node.acf.feat_img.localFile.childImageSharp.sizes}
              alt={post.node.title}
            />
            <article style={{ width: "60%", alignSelf: "center", fontSize: "2rem", lineHeight: 1.6, letterSpacing: "normal",}}>
							<article className="Article"
								dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </article>
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
                  sizes(maxWidth: 1000) {
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
