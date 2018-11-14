import React, { Component } from 'react'

const Header = ({ keys }) => (
  <thead>
    <tr>
      {keys.sort().map((o, i) => (
        <th key={`header-key-${i}`}>{o}</th>
      ))}
    </tr>
  </thead>
)

const Row = ({ style, o, i, click }) => (
  <tr style={style} onClick={click}>
    {Object.keys(o)
      .sort()
      .map((k, i2) => (
        <td key={`cell-key-${i2}`}>{JSON.stringify(o[k])}</td>
      ))}
  </tr>
)

export default class JsonFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idx: {},
    }
    this.clickRow = this.clickRow.bind(this)
  }

  clickRow(a) {
    const idx = { ...this.state.idx }
    if (idx[a.currentTarget.rowIndex - 1]) {
      delete idx[a.currentTarget.rowIndex - 1]
    } else {
      idx[a.currentTarget.rowIndex - 1] = true
    }
    this.setState({ idx })
  }

  render() {
    const { json, error } = this.props
    if (error) {
      return error
    }
    if (!json) {
      return null
    }

    return (
      <div>
        <p>Selected: {Object.keys(this.state.idx).length}</p>
        <button disabled={!Object.keys(this.state.idx).length}>Submit</button>
        <table>
          <Header keys={Object.keys(json[0])} />
          <tbody>
            {json.map((o, i) => (
              <Row
                style={{ background: this.state.idx[i] && 'yellow' }}
                click={this.clickRow}
                i={i}
                key={`json-file-line-${i}`}
                o={o}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
