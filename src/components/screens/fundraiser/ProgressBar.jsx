import React from 'react'

const ProgressBar = ({ max, value }) => {
  return (
    <progress
      style={{ width: '100%', borderRadius: '10px' }}
      max={max}
      value={value}
    ></progress>
  )
}

export default ProgressBar
