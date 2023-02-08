import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage