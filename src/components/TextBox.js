import React, { Component, PropTypes } from 'react'

const TextBox = (props) => {
  if (props.multiLine) {
    return (
      <textarea {...props} />
    )
  } else {
    return (
      <input type="text" {...props} />
    )
  }
}

export default TextBox