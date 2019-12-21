import React from "react"
import Layout from "../components/layout"
import {StaticQuery, graphql} from "gatsby"

export default () => (
    <StaticQuery
        query={graphql`
  query {
    allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1
    ) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            path
            title
          }
        }
      }
    }
  }
`}
        render={data => (
            <Layout>
                <header>
                    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}
                    />
                </header>
            </Layout>
        )}
    />
)
