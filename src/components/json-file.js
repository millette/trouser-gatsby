import React from 'react'

export default ({ json, error }) => {
  if (error) {
    return error
  }
  if (!json) {
    return null
  }
  if (!json.length) {
    return 'invalid file'
  }
  return (
    <ul>
      {json.map((o, i) => (
        <li key={`json-file-line-${i}`}>{JSON.stringify(o).slice(0, 60)}</li>
      ))}
    </ul>
  )
}
