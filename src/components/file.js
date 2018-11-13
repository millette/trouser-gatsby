import React, { Component } from 'react'

// self
import JsonFile from '../components/json-file'

const normalize = (x) => {
  if (!x.length) {
    throw new Error('Invalid file')
  }

  const keys = x
    .map((o) => Object.keys(o))
    .reduce((a, b) => [...a, ...b], [])

  const z = Array.from(new Set(keys)).sort()
  return x.map((b) => {
    const ret = { }
    z.forEach((a) => {
      ret[a] = b[a]
    })
    return ret
  })
}

export default class File extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.publicURL === this.props.publicURL) {
      return
    }

    try {
      this.setState({ json: false, error: 'read...' })
      const res = await fetch(this.props.publicURL)
      this.setState({ error: 'json...' })
      const json2 = await res.json()
      this.setState({ error: 'norm...' })
      const json = normalize(json2)
      this.setState({ json, error: false })
    } catch (e) {
      this.setState({ json: false, error: e.toString() })
    }
  }

  render() {
    return (
      !this.props.absolutePath || (
        <div>
          <h3>
            {this.props.dir} / {this.props.name}
          </h3>
          <h4>{this.props.absolutePath}</h4>
          <JsonFile error={this.state.error} json={this.state.json} />
        </div>
      )
    )
  }
}
