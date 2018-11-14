import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

export default ({
  data: {
    allFile: { group },
  },
}) => {
  const tree = group.map(({ fieldValue, edges }) => ({
    fieldValue,
    stuff: edges.map(({ node: { relativePath } }) => relativePath),
  }))
  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <Link to="/">Go back to the homepage</Link>{' '}
      <Link to="/page-3">Go to page 3</Link>
      <pre>{JSON.stringify(tree, null, '  ')}</pre>
      <pre>{JSON.stringify(group, null, '  ')}</pre>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "le-f2" }, extension: { eq: "json" } }
    ) {
      group(field: relativeDirectory) {
        field
        fieldValue
        totalCount
        edges {
          node {
            relativePath
            absolutePath
            publicURL
          }
        }
      }
    }
  }
`
