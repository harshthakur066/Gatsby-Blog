import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <div>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More...</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndex {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            date
            path
            title
          }
          id
        }
      }
    }
  }
`
export default BlogPage