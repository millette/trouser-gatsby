// npm
import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

// self
import Layout from '../components/layout'
import Files from '../components/files'

export default class P3 extends Component {
  constructor (props) {
    super(props)
    this.group = props.data.allFile.group
    this.state = { }
  }

  onClick (dir, files) {
    this.setState({ dir, files })
  }

  render () {
    return (
      <Layout>
        <h1>Welcome to page 3</h1>
        <Link to="/">Go back to the homepage</Link>{' '}
        <Link to="/page-2">Go to page 2</Link>
        <ul>
          {this.group.map(({ fieldValue, totalCount, edges }, i) => (
            <li key={`dir-${fieldValue}-${i}`} onClick={this.onClick.bind(this, fieldValue || '.', edges.map(({ node }) => node))}>
              {fieldValue || '.'} <small>({totalCount})</small>
            </li>
          ))}
        </ul>
        <Files {...this.state} />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "le-f2"}, extension: {eq: "json"}}) {
      group(field: relativeDirectory) {
        fieldValue
        totalCount
        edges {
          node {
            absolutePath
            publicURL
            name
          }
        }
      }
    }
  }
`
