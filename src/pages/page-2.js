import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

export default ({ data: { allFile: { group } } }) => {
  console.log(group)
  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <pre>{JSON.stringify(group, null, '  ')}</pre>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "le-f2"}, extension: {eq: "json"}}) {
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
