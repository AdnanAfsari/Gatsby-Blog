import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          background: '#fff',
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: "70%",
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            fontFamily: `Inter`,
          }}
        >
          <h1 style={{ margin: 0, }}>
            <Link
              to="/"
              style={{
                color: `#e22658`,
                textDecoration: `none`,
              }}
            >
              {data.wordpressSiteMetadata.name}
            </Link>
          </h1>
					<ul
						style={{
              listStyle: `none`,
              display: `flex`,
              margin: 0,
            }}
					>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} style={{ margin: `0 10px`, }}>
                <Link
                  to={`/${item.object_slug}`}
                  style={{
                    color: `#e22658`,
                    textDecoration: `none`,
                    textTransform: 'uppercase',
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    )}
  />
)

export default Header
