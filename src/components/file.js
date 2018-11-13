import React, { Component } from 'react'

// self
import JsonFile from '../components/json-file'

export default class File extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  async componentDidUpdate (prevProps) {
    if (prevProps.publicURL === this.props.publicURL) {
      return
    }

    try {
      const res = await fetch(this.props.publicURL)
      const json = await res.json()
      this.setState({ json, error: false })
    } catch (e) {
      this.setState({ json: false, error: e.toString() })
    }
  }

  render () {
    if (!this.props.absolutePath) { return null }
    return (
      <div>
        <h3>{this.props.dir} / {this.props.name}</h3>
        <h4>{this.props.absolutePath}</h4>
        <JsonFile error={this.state.error} json={this.state.json} />
      </div>
    )
  }
}
